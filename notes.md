# Todo, Notes, etc.

Note: here, 'node' refers not to Node.JS or anything related, but rather to an arduino or similar chip (I use the ESP8266 NodeMCU from HiLetGo). These are 'nodes' on the sensor network

## Server

- [ ] Add API endpoint /node/vitals

  - Send information about the node/chip

- [ ] Add API endpoint /node/error

  - POST error information from a node

- [ ] Add API endpoint /node/ping

  - GET node's connectivity, round trip latency, and server time.

- On first contact with a chip, save its MAC address, and register it.

  - On subsequent messages, the IP can be used to identify the chip after. Maybe thats the move.

- Maybe don't write a client here, maybe a client should be a separate project, and this should include a REST api for getting data

## Arduino

- Use the esp8266's MAC address as the chip's UUID, thereby making sketches completely reusable on chips. This will remove the need to hard code UUID strings onto each individual chip.

- Every Xth loop, send a
