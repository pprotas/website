# docker build -t website -f Dockerfile . (from root dir)
FROM python:alpine

LABEL Name=pprotas/website Version=0.0.1
EXPOSE 80

WORKDIR /app
COPY . /app

RUN pip3 install .
ENV FLASK_APP pweb

# $PORT is a Heroku variable. This Docker image will only work on Heroku.
CMD flask run --host='0.0.0.0' --port=$PORT
# Change this using http://flask.pocoo.org/docs/1.0/tutorial/deploy/