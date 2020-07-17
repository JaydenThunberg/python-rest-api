from flask import Flask, request, jsonify

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
