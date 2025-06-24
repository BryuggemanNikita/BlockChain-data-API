# BlockChain-data-API
Промежуточное api по взаимодействию с блокчейн сервисами evm и cosmos 

# Собрать образ  
```bash
docker build -t nest-app .  
```

# Запустить контейнер  
```bash
docker run -p 3000:3000 nest-app
```

# Путь в свагер
http://localhost:3000/api/docs

появились проблемы с транзакциями у сервиса cosmos - по предложенному api не видит валидный хэш транзакции на уровне браузера.