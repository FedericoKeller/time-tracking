class HelloService {
  Hi() {
    console.log('hola')
  }
}

class myComponent {
  constructor(public helloService: HelloService) {

  }
}


class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach(service => this._container.set(service, new service()));
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);

    if(!serviceInstance) {
      throw Error('No provider found');
    }

    return serviceInstance;
  }
}

const injector = new Injector([HelloService]);
const component = new myComponent(injector.get(HelloService));

component.helloService.Hi();
