onNet('helloserver', () => {
  const _source: string | number = (global).source;

  emitNet('helloclient', _source, 'i got your message!');

  return `Hello from ${_source}`;
});
