import psycopg2
# psycopg2: handles queries between Flask server and postgresql
import psycopg2.extras
# add on for psycopg2 to format postgres response as dictionary
from flask import Flask, request, jsonify

app = Flask(__name__)

# configures connection to database
# mainConnection = psycopg2.connect(user="nailahjohnson",
#                                        host="localhost",
#                                        port="5432",
#                                        database="pets")


@app.route('/pets', methods=['GET'])
def getPet():
    try:
        connection = mainConnection

        # cursor: allows Python code to execute postgresql commands in database session created by connection.cursor
        # cursor is configured to provide rows stored as dictionary
        cursor = connection.cursor(
            cursor_factory=psycopg2.extras.RealDictCursor)
        sql_select_query = """ SELECT "owners"."id" AS "owner_id", "owners"."first_name", "pets"."id" as "pet_id", "pets"."breed", "pets"."color", "pets"."pet_name", "pets"."status"
        FROM "owners" JOIN "pets" ON "owners"."id" = "pets"."owner_id" ORDER BY "pets"."status" ASC; """
        # sends query using session
        cursor.execute(sql_select_query)
        # cursor method determines response rows
        # .fetchall gets all rows satisfiying query
        record = cursor.fetchall()
        print(record)
        # jsonify the returned rows
        return jsonify(record)

    except (Exception, psycopg2.Error) as error:
        # handles errors
        if(connection):
            print("Failed to GET from db", error)

    finally:
        # closing database connection.
        if(connection):
            cursor.close()
            # connection.close()
            print("PostgreSQL cursor is closed")


# @app.route('/pets', methods=['GET'])
# def getPet():
#     return{
#         'userId': 1,
#         'title': 'Flask React App',
#         'completed': False
#     }
