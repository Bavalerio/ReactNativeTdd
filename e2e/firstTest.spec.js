describe('Componente Pokemon', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("debe mostrar la imagen Pokeball al cargar el app", async () => {
    await expect(element(by.id("pokeball_image"))).toBeVisible();
  });

  it("debe mostrar información relevante del Pokemon despues de hacerle tap al boton", async () => {
    await element(by.id("action_button")).tap();

    await expect(element(by.id("pokemon_sprite"))).toExist();
    await expect(element(by.id("pokemon_name"))).toExist();
    await expect(element(by.id("pokemon_types"))).toExist();
    await expect(element(by.id("pokemon_description"))).toExist();
  });

  it('No debe mostrar ningun error luego de hacer tap al boton', async () => {
    await element(by.id("action_button")).tap();

    await expect(element(by.id("error_message"))).toNotExist();
  });

  it('debe mostrar un mensaje de error luego de hacer tap al boton de error', async () => {
    await element(by.id("mostrar_error")).tap();

    await expect(element(by.id("error_message"))).toExist();
  });
});