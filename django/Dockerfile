FROM python:latest
WORKDIR /env
COPY requirements.txt ./
RUN apt-get update 
RUN apt-get -y install vim
RUN apt-get -y install netcat
RUN pip install -r requirements.txt
CMD ["bash"]