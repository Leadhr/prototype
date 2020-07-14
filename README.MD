#front and back end docker use instructions

backend instructions:
sudo docker build -t back-end .
sudo docker run -p 5000:5000 dcd5e5337742

frontend instructions:
sudo docker build -t front-end .
sudo docker run -it -p 3000:3000 e86522e5ee7a