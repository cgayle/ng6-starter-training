import CompanyModule from './company'
import CompanyController from './company.controller';
import CompanyComponent from './company.component';
import CompanyTemplate from './company.html';

describe('Company', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CompanyModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CompanyController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CompanyTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CompanyComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CompanyTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CompanyController);
      });
  });
});
