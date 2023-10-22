# Django Python backend documentation

## Table of contents

- [Django Python backend documentation](#django-python-backend-documentation)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)

## Installation

1. Install [Python 3.8.5](https://www.python.org/downloads/)

2. Navigate to backend folder

```bash
cd backend
```

3. Create virtual environment

```bash
python3 -m venv .venv
```

4. Activate virtual environment

#### Linux/MacOS

```bash
. .venv/bin/activate
```

#### Windows

```bash
. .venv/Scripts/activate
```

5. Install dependencies

```bash
pip install -r requirements.txt
```

or

```bash
pip install django djangorestframework

python -m pip install django-cors-headers
```

6. Migrate database

```bash
python manage.py migrate

python manage.py migrate --run-syncdb # OPTIONAL

python manage.py makemigrations backend
```

> **IMPORTANT**: If you change models, you need to run this command again

7. Run server

```bash
python manage.py runserver
```
