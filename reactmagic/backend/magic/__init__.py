import imp
from flask import Flask,request
#import json

from magic.magicSquare import newMagicSquare

app = Flask(__name__)

@app.route('/magicsquare', methods=['GET'])
def method_name():
    try:
        
        return {"message":["member1","member2"]}
    except Exception as error:
        print("error :", error)
    