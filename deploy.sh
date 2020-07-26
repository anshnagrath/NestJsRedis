cd api-gateway/ && npm run build &&  pm2 start npm --name gateway -- run start:prod && cd -
cd microservices/agency && npm run build &&  pm2 start npm --name agency -- run start:prod && cd -
cd microservices/client && npm run build &&  pm2 start npm --name client -- run start:prod && cd -
pm2 log