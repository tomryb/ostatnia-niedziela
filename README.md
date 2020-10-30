
## React Hackathon

Repo do hackathonu, mającego przybliżyć technologie wykorzystywane na front-endzie projektu Next.

Wymagania: docker i docker-compose

Do inicjalizacji i startu projektu wystarczy uruchomić skrypt:

```bash
bash ./start.sh
```

W trakcie działania zostaniesz jednorazowo zapytany(-a) o `AuthToken` dla FontAwesome. Znajdziesz go w **Vaulcie** pod ścieżką [production/devtools/fontawesome](https://vault.timecamp.com/ui/vault/secrets/production/show/devtools/fontawesome).

Aplikacja będzie dostępna pod [http://localhost:3000/](http://localhost:3000/).

Po skończeniu programowania wywołujemy:

```bash
docker-compose down
```

W projekcie znajdują się:

- komponent do ikon - **Icon**
- prosty model reduxa - **TemplateModel**
- użycie selektora w hooku komponentu **App**
- wysłanie akcji do reduxa przez komponent **App**
