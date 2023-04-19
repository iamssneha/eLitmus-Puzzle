from src import app 

if __name__ == '__main__':
    create_app = app
    create_app.run()
else:
    gunicorn_app = app