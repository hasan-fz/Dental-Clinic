FROM python:3.10.6 as backend
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt ./requirements.txt
RUN pip install -r requirements.txt
COPY . .

FROM node:18-alpine as frontend
WORKDIR /app/frontend
COPY frontend/package.json ./package.json
COPY frontend/package-lock.json ./package-lock.json
RUN npm install
COPY frontend .
RUN npm run build

FROM python:3.10.6
WORKDIR /app
COPY --from=backend /app .
RUN pip install -r requirements.txt
COPY --from=frontend /app/frontend ./frontend
CMD python3 manage.py runserver 0.0.0.0:8000