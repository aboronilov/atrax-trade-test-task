# Тестовое задание на должность Fullstack разработчика 

## Технололгии

### Backend
* [Django](https://www.djangoproject.com/)
* [DRF](https://www.django-rest-framework.org/)
* [PostgreSQL](https://www.postgresql.org/)

### Frontend
* [NextJS](https://nextjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [ShadCN UI](https://ui.shadcn.com/)
* [React Hook Froms](https://react-hook-form.com/)
* [Zod](https://github.com/colinhacks/zod)

## План развития приложения
* Покрыть код тестами (Frontend + Backend)
* Добавить отдельную страницу с информацией по телефону в случае его существования.
* Автоматизировать процесс парсинга данных из csv файлов. Предлагается запустить службу [Celery](https://docs.celeryq.dev/en/stable/django/first-steps-with-django.html), в которой с заданной периодичностью будет выполняться задача по сбору данных и добавлению их в БД. Настроить логгирование процесса.
* Автоматизация деплоя:
    - Запаковать приложение в [docker](https://www.docker.com/) контейнеры
    - Поднять кластер [k8s](https://kubernetes.io/)
    - Настроить СI/CD pipleines (либо GitHub actions, либо GitLab CI/CD) - добавить задания по прогону тестов и линтеров

# Описание работы приложения
1) При запуске приложения открывается форма с вводом номера телефона. 

![Landing page](https://raw.githubusercontent.com/aboronilov/atrax-trade-test-task/main/client/public/screenshots/1.png)

Валидация отработает если:

* Номер телефона начинается не с 7

![Landing page](https://raw.githubusercontent.com/aboronilov/atrax-trade-test-task/main/client/public/screenshots/2.png)

* Длина номера не равна 11

![Landing page](https://raw.githubusercontent.com/aboronilov/atrax-trade-test-task/main/client/public/screenshots/3.png)

![Landing page](https://raw.githubusercontent.com/aboronilov/atrax-trade-test-task/main/client/public/screenshots/4.png)

2) При введении корректного номера выдается сообщение

* пример из зоны ABC-3xx

![Landing page](https://raw.githubusercontent.com/aboronilov/atrax-trade-test-task/main/client/public/screenshots/5.png)

* пример из зоны ABC-4xx

![Landing page](https://raw.githubusercontent.com/aboronilov/atrax-trade-test-task/main/client/public/screenshots/6.png)

* пример из зоны ABC-8xx

![Landing page](https://raw.githubusercontent.com/aboronilov/atrax-trade-test-task/main/client/public/screenshots/7.png)

* пример из зоны DEF-9xx

![Landing page](https://raw.githubusercontent.com/aboronilov/atrax-trade-test-task/main/client/public/screenshots/8.png)

Валидация отработает, если информация по номеру не найдена:

![Landing page](https://raw.githubusercontent.com/aboronilov/atrax-trade-test-task/main/client/public/screenshots/9.png)

