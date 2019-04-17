# docker build -t website -f docker/Dockerfile . (from roto dir)
FROM python:alpine

LABEL Name=website Version=0.0.1
EXPOSE 80

WORKDIR /app
COPY . /app

RUN python3 -m pip install -r docker/requirements.txt
CMD ["python3", "-m", "website"]