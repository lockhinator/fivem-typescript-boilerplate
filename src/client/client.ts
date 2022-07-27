setImmediate(() => {
  emitNet('helloserver');
});

onNet('helloclient', (message: string) => {
  // do something here
  return message;
});
