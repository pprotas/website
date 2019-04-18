# docker build -t website -f docker/Dockerfile . (from root dir)
FROM python:alpine

LABEL Name=website Version=0.0.1
EXPOSE 80

WORKDIR /app
COPY . /app

RUN pip3 install .
ENV FLASK_APP pweb

CMD ["flask", "run", "--host=0.0.0.0", "--port=80"]
# Change this using http://flask.pocoo.org/docs/1.0/tutorial/deploy/