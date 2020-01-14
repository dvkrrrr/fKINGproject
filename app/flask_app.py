from flask import Flask, render_template, request
from flask_script import Manager, Command, Shell
import sqlite3
app = Flask(__name__)
manager = Manager(app)
app.debug = True




manager = Manager(app)


class Faker(Command):
    def run(self):
        # логика функции
        print("Fake data entered")


manager.add_command("faker", Faker())


@manager.command
def foo():
    print("foo command executed")


def shell_context():
    import os, sys
    return dict(app=app, os=os, sys=sys)


manager.add_command("shell", Shell(make_context=shell_context))


@app.route('/')
def index():
    con = sqlite3.connect("bouquet.db")
    cur = con.cursor()
    result = cur.execute("""SELECT * FROM bouquets""").fetchall()
    count = len(result)
    result1 = cur.execute("""SELECT * FROM flowers""").fetchall()
    count1 = len(result1)
    result2 = cur.execute("""SELECT * FROM beauty""").fetchall()
    count2  = len(result2)
    return render_template('index.html', name=result, count=count, name1=result1, count1=count1, name2=result2, count2=count2)


@app.route('/user/<int:user_id>/')
def user_profile(user_id):
    return "Profile page of user #{}".format(user_id)


@app.route('/send.php')
def books():
    return "Hi"


@app.route('/login/', methods=['post', 'get'])
def login():
    con = sqlite3.connect("bouquet.db")
    cur = con.cursor()
    result = cur.execute("""SELECT * FROM bouquets""").fetchall()
    count = len(result)
    return render_template('login.html', name=result, count=count)






if __name__ == "__main__":
    manager.run()
