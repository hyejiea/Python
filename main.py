# main.py

from flask import Flask, render_template

app = Flask(__name__)

# Sample data (to be replaced with database implementation)
data = []

# Route to render the CRUD table
@app.route('/')
def home():
    return render_template('index.html')

# Route to add data
@app.route('/add', methods=['POST'])
def add_data():
    name = request.form.get('name')  # Get data from the form
    data.append({'id': len(data) + 1, 'name': name})  # Add data to the list
    return 'Data added successfully'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')