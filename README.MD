#front and back end docker use instructions

backend instructions:
sudo docker build -t back-end .
sudo docker run -p 5000:5000 2cfccbe6032d

frontend instructions:
sudo docker build -t front-end .
sudo docker run -it -p 3000:3000 0a75f7b80347