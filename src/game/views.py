from flask import Blueprint, render_template, request, jsonify, redirect
from flask_login import login_required, current_user
from src.accounts.models import User
from src import db
import random, string

game_bp = Blueprint("game", __name__)
code_word_level_1=""

@game_bp.route('/level0')
@login_required
def level0():
    return redirect("/")

@game_bp.route('/level1')
@login_required
def level1():
    return render_template('game/level1.html')

@game_bp.route('/level2')
@login_required
def level2():
    random_string = ''.join(random.choices(string.ascii_uppercase +
                             string.digits + string.ascii_lowercase, k=10))
    global code_word_level_1
    code_word_level_1 = random_string
    return render_template('game/level2.html', code_word=random_string)

@game_bp.route('/level3')
@login_required
def level3():
    return render_template('game/level3.html')

@game_bp.route('/level4')
@login_required
def level4():
    return  render_template('game/level4.html')

@game_bp.route('/level5')
@login_required
def level5():
    return render_template('game/level5.html')

@game_bp.route('/decode-code', methods=[ "POST"])
@login_required
def decode():
    res = request.form["guess"]
    if res == code_word_level_1:
        return jsonify("correct")
    return jsonify("incorrect")

@game_bp.route("/update-data",  methods=["POST"])
@login_required
def update():
    user = User.query.filter_by(email=current_user.email).first()
    user.level1_tries += int(request.form["level1"])
    user.level2_tries += int(request.form["level2"])
    user.level3_tries += int(request.form["level3"])
    user.level4_tries += int(request.form["level4"])
    user.level5_tries += int(request.form["level5"])
    currLevel = int(request.form["curr_level"])
    if currLevel > user.maxCurrentLevel:
        user.maxCurrentLevel = currLevel
    print(user)
    db.session.commit()
    return "Updated successfully"

@game_bp.route("/update-tries",  methods=["POST"])
@login_required
def update_tries():
    user = User.query.filter_by(email=current_user.email).first()
    user.number_of_tries += 1
    db.session.commit()
    return "Updated successfully"