import {
  Compiler,
  NgModuleFactoryLoader,
  Optional,
  SystemJsNgModuleLoader,
  SystemJsNgModuleLoaderConfig,
} from '@angular/core';

import { CustomError } from './my-error-handler';

export class ModuleLoader implements NgModuleFactoryLoader {
  private systemJsNgModuleLoader: SystemJsNgModuleLoader;

  constructor(
    private readonly compiler: Compiler,
    @Optional() config?: SystemJsNgModuleLoaderConfig
  ) {
    this.systemJsNgModuleLoader = new SystemJsNgModuleLoader(compiler, config);
  }

  public load(path: string) {
    if (path.includes('lazy-loaded')) {
      throw new CustomError('!!custom error!!');
    } else {
      return this.systemJsNgModuleLoader.load(path);
    }
  }
}
