# import psycopg2

from flask import Flask, request, jsonify

app = Flask(__name__)

# mainConnection = psycopg2.connect(user="nailahjohnson",
#                                        host="localhost",
#                                        port="5432",
#                                        database="pets")



@app.route('/pets', methods=['GET'])
def getPet():
    return{
        'userId':1,
        'title': 'Flask React App',
        'completed': False
    }
    

print("PostgreSQL connected",getPet)
