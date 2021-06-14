import { storiesOf } from '@storybook/html';

/**
 * Iterates all of the stencil contexts and build a "config" object
 * which is used to generate the individual stories.
 */
function buildStencilStories(name, componentsCtx, storiesCtx) {
  const configs = buildGeneratorConfigs(componentsCtx, storiesCtx);

  const stories = storiesOf(name, module);

  Object.keys(configs)
    .map(comp => configs[comp])
    .forEach(config =>
      typeof config === 'function'
        ? // If the config is a function, call it with the stories context.
          // The function is responsible for calling stories.add(...) manually.
          config(stories)
        : createStencilStory(config, stories),
    );
}

export default buildStencilStories;