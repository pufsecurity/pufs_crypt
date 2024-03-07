FROM python:3

RUN mkdir -p /usr/src/app
COPY . requirements.txt /usr/src/app/
WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y curl && \
    rm -rf /var/lib/apt/lists/* && \
    pip3 install --no-cache-dir -r requirements.txt

EXPOSE 8080
CMD ["./start.sh"]
