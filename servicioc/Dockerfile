FROM python:3.8-slim

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .


# Expone el puerto en el que se ejecutará el servicio
EXPOSE 3001

CMD ["python", "app.py"]
