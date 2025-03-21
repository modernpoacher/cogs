import globals from 'globals'
import standard from '@sequencemedia/eslint-config-standard/configs/recommended/merge'
import typescript from '@sequencemedia/eslint-config-typescript/configs/recommended/merge'
import babelParser from '@babel/eslint-parser'
import typescriptParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import storybookPlugin from 'eslint-plugin-storybook'

const reactParserOptions = {
  ecmaFeatures: {
    jsx: true
  }
}

const reactPlugins = {
  react: reactPlugin
}

const storybookPlugins = {
  storybook: storybookPlugin
}

const reactRules = {
  'no-unused-vars': [
    'error',
    {
      varsIgnorePattern: 'React'
    }
  ],
  quotes: [
    'error',
    'single'
  ],
  'jsx-quotes': [
    'error',
    'prefer-single'
  ],
  'react/jsx-indent': [
    'error',
    2,
    {
      checkAttributes: true,
      indentLogicalExpressions: true
    }
  ]
}

const reactSettings = {
  react: {
    version: 'detect'
  }
}

export default [
  {
    ignores: [
      'coverage'
    ]
  },
  /**
   *  React config for all `jsx` and `tsx` files
   */
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      ...reactPlugin.configs.flat.recommended.settings,
      ...reactSettings
    }
  },
  /**
   *  Storybook config
   */
  ...storybookPlugin.configs['flat/recommended'],
  /**
   *  Standard config
   */
  standard({
    files: [
      '**/*.{mjs,cjs,mts,cts}'
    ],
    ignores: [
      'src',
      'stories'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  standard({
    files: [
      'src/**/*.{mjs,cjs,mts,cts}',
      'stories/**/*.{mjs,cjs,mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }),
  /**
   *  Standard config for all `jsx` and `tsx` files
   */
  standard({
    files: [
      'src/**/*.tsx',
      'stories/**/*.jsx'
    ],
    ignores: [
      'src/**/__tests__/**/*.tsx',
      'stories/**/__tests__/**/*.jsx'
    ],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ...reactParserOptions,
        project: null
      },
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      ...reactPlugins,
      ...storybookPlugins
    },
    rules: {
      ...reactRules
    },
    settings: {
      ...reactSettings,
      'import/resolver': {
        'babel-module': {}
      }
    }
  }),
  standard({
    files: [
      'src/**/__tests__/**/*.tsx',
      'stories/**/__tests__/**/*.jsx'
    ],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ...reactParserOptions,
        project: null
      },
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    },
    plugins: {
      ...reactPlugins,
      ...storybookPlugins
    },
    rules: {
      ...reactRules
    },
    settings: {
      ...reactSettings,
      'import/resolver': {
        'babel-module': {}
      }
    }
  }),
  /**
   *  TypeScript config
   */
  typescript({
    files: [
      '**/*.{mts,cts}'
    ],
    ignores: [
      'src',
      'stories'
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        CogsTypes: 'readonly'
      }
    }
  }),
  typescript({
    files: [
      'src/**/*.{mts,cts}'
    ],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }),
  /**
   *  TypeScript config for only `tsx` files
   */
  typescript({
    files: [
      'src/**/*.tsx'
    ],
    ignores: [
      'src/**/__tests__/**/*.tsx'
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ...reactParserOptions,
        projectService: true,
        project: 'tsconfig.json'
      },
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      ...reactPlugins
    },
    rules: {
      ...reactRules
    },
    settings: {
      ...reactSettings
    }
  }),
  typescript({
    files: [
      'src/**/__tests__/**/*.tsx'
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ...reactParserOptions,
        projectService: true,
        project: 'tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.jest
      }
    },
    plugins: {
      ...reactPlugins
    },
    rules: {
      ...reactRules
    },
    settings: {
      ...reactSettings
    }
  })
]
