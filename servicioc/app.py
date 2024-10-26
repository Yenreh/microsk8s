from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/servicio-c', methods=['GET'])
def service():
    resultado = "Yenreh Service Test"
    return jsonify({"message": resultado})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3003)
