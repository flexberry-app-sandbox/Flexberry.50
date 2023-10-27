docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 50-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 50-java/app ../../..
