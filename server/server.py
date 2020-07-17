from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

# configures connection to database
mainConnection = psycopg2.connect(user="nailahjohnson",
                                       host="localhost",
                                       port="5432",
                                       database="pets")

app = Flask(__name__)


@app.route('/pets', methods=['GET'])
def getPet():
    try:
        # connect to database
        connection = psycopg2.connect(
            host="localhost",
            port="5432",
            database="pets"
        )
        cursor = connection.cursor()  # create cursor to interact with database

        sql_select_query = "SELECT owners.*, pets.* FROM owners JOIN pets ON owners.id = pets.owner_id ORDER BY owners.id ASC;"
        # sends query using session
        cursor.execute(sql_select_query)
        # cursor method determines response rows
        # .fetchall gets all rows satisfiying query
        allPets = cursor.fetchall()
        print(allPets)
        # jsonify the returned rows
        return jsonify(allPets)

    except (Exception, psycopg2.Error) as error:
        # handles errors
        if(connection):
            print("Failed to GET from db", error)

    finally:
        # closing database connection.
        if(connection):
            cursor.close()  # closes cursor
            connection.close()
            # logs that connection is closed
            print("PostgreSQL connection is closed")
# END GET ROUTE for PETS TABLE


@app.route("/add", methods=["POST"])
def postPet():
    print(request.json)
    try:
        connection = mainConnection
        cursor = connection.cursor()
        # replace template %s with record_to_insert
        postgres_insert_query = """INSERT INTO "pets" ("owner_id", "pet_name", "breed", "color", "status") VALUES (%s,%s,%s,%s,%s) """
        # record_to_insert must be interable
        record_to_insert = (request.json['owner_id'], request.json['pet_name'],
                            request.json['breed'], request.json['color'], request.json['status'])
        cursor.execute(postgres_insert_query, record_to_insert)
        connection.commit()
        return 'HTTP_201_Created'
    except (Exception, psycopg2.Error) as error:
        if(connection):
            print("Failed to POST to db", error)
            return 'failed'
    finally:
        # closing database connection.
        if(connection):
            cursor.close()
        #   connection.close()
            print("PostgreSQL cursor is closed")
            return 'finally'
