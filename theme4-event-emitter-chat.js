import { EventEmitter } from 'node:events';
import { faker } from '@faker-js/faker';
class Message extends EventEmitter {
    constructor() {
        super();
    }

    sendMessage({username, message}) {
      console.log(`Пользователь ${username} оправил сообщение: `, message);
    }

  receiveMessage({username, message}) {
    console.log(`Вам сообщение от пользователя ${username}: `, message);
  }
}

const message = new Message();

message.on('send', (data) => {
  message.sendMessage(data);
  message.emit('receive', data);
});

message.on('receive', (data) => {
  message.receiveMessage(data);
});

const startMessaging = (interval) => {
    const tick = () => {
      message.emit('send', {
        username: faker.person.fullName(),
        message: faker.lorem.sentence(),
      });
      setTimeout(tick, interval);
    }
    tick();
}

startMessaging(2000);
