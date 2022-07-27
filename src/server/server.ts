onNet('helloserver', () => {
  const _source: string | number = (global).source;

  console.log(`Hello from ${_source}`);

  emitNet('helloclient', _source, 'i got your message!');
});
