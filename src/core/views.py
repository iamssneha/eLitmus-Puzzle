from flask import Blueprint, render_template
from flask_login import login_required, current_user
from src.accounts.models import User


core_bp = Blueprint("core", __name__)

@core_bp.route("/")
@login_required
def home():
    user = User.query.filter_by(email=current_user.email).first()
    max_current_level = user.maxCurrentLevel
    print(max_current_level)
    return render_template("core/index.html", current_level=max_current_level)

@core_bp.route("/admin/home")
@login_required
def admin_home():
    return render_template("core/admin.html")

@core_bp.route("/admin/stats")
@login_required
def admin_stats():
    users = User.query.all()
    items = []
    for user in users:        
        an_item = dict(email=user.email,
            level1_tries=user.level1_tries,
            level2_tries=user.level2_tries,
            level3_tries=user.level3_tries,
            level4_tries=user.level4_tries,
            level5_tries=user.level5_tries,
            maxCurrentLevel=user.maxCurrentLevel,
            num_tries=user.number_of_tries,
            is_admin=user.is_admin
        )
        items.append(an_item)
    return render_template("core/admin_stats.html", items=items)

@core_bp.route("/congrats")
@login_required
def congrats():
    return render_template("core/congrats.html")