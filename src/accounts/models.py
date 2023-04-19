from datetime import datetime

from flask_login import UserMixin

from src import bcrypt, db


class User(UserMixin, db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    created_on = db.Column(db.DateTime, nullable=False)
    is_admin = db.Column(db.Boolean, nullable=False, default=False)
    level1_tries = db.Column(db.Integer, default=0)
    level2_tries = db.Column(db.Integer, default=0)
    level3_tries = db.Column(db.Integer, default=0)
    level4_tries = db.Column(db.Integer, default=0)
    level5_tries = db.Column(db.Integer, default=0)
    maxCurrentLevel = db.Column(db.Integer, default=0)
    number_of_tries = db.Column(db.Integer, default=0)

    def __init__(self, email, password, is_admin=False):
        self.email = email
        self.password = bcrypt.generate_password_hash(password).decode('utf8')
        self.created_on = datetime.now()
        self.is_admin = is_admin

    def __repr__(self):
        return f"<email {self.email}>"
