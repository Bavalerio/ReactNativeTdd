# Proyecto para realizar unit test / e2e testing en React Native

Implementación basica para desarrollar conocimiento de end-to-end testing con Jest y Detox.

# Como instalar

```
yarn
```

# Ejecutar pruebas

```
yarn test
```

# Ejecutar pruebas E2E

```
yarn test:e2e
```

Esto es equivalente a

```
detox test -c ios.sim.debug
```

# Comandos importantes

En caso de que el `detox build` falle es recomendable limpiar los caches

```
watchman watch-del-all; yarn start -- --reset-cache
```

Check this by typing `xcrun simctl list` in terminal to display all available simulators.
