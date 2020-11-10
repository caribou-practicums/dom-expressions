import { For as _$For } from "r-server";
import { createComponent as _$createComponent } from "r-server";
import { assignProps as _$assignProps } from "r-server";
import { ssr as _$ssr } from "r-server";
import { escape as _$escape } from "r-server";
import { getHydrationKey as _$getHydrationKey } from "r-server";

const Child = props => [
  _$ssr(
    ['<div data-hk="', '">Hello <!--#-->', "<!--/--></div>"],
    _$getHydrationKey(),
    _$escape(props.name)
  ),
  _$ssr(['<div data-hk="', '">', "</div>"], _$getHydrationKey(), _$escape(props.children))
];

const template = props => {
  let childRef;
  const { content } = props;
  return _$ssr(
    ['<div data-hk="', '"><!--#-->', "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div>"],
    _$getHydrationKey(),
    _$createComponent(
      Child,
      _$assignProps(
        {
          name: "John"
        },
        props,
        {
          booleanProperty: true,

          get children() {
            return _$ssr(['<div data-hk="', '">From Parent</div>'], _$getHydrationKey());
          }
        }
      )
    ),
    _$createComponent(Child, {
      name: "Jason",

      get children() {
        return _$ssr(['<div data-hk="', '">', "</div>"], _$getHydrationKey(), _$escape(content));
      }
    }),
    _$createComponent(Context.Consumer, {
      children: context => context
    })
  );
};

const template2 = _$createComponent(Child, {
  name: "Jake",

  get dynamic() {
    return state.data;
  },

  stale: state.data,
  handleClick: clickHandler,

  get ["hyphen-ated"]() {
    return state.data;
  }
});

const template3 = _$createComponent(Child, {
  get children() {
    return [
      _$ssr(['<div data-hk="', '"></div>'], _$getHydrationKey()),
      _$ssr(['<div data-hk="', '"></div>'], _$getHydrationKey()),
      _$ssr(['<div data-hk="', '"></div>'], _$getHydrationKey()),
      "After"
    ];
  }
});

const template4 = _$createComponent(Child, {
  get children() {
    return _$ssr(['<div data-hk="', '"></div>'], _$getHydrationKey());
  }
});

const template5 = _$createComponent(Child, {
  get dynamic() {
    return state.dynamic;
  },

  get children() {
    return state.dynamic;
  }
}); // builtIns

const template6 = _$createComponent(_$For, {
  get each() {
    return state.list;
  },

  get fallback() {
    return _$createComponent(Loading, {});
  },

  children: item => item
});

const template7 = _$createComponent(Child, {
  get children() {
    return [_$ssr(['<div data-hk="', '"></div>'], _$getHydrationKey()), () => state.dynamic];
  }
});

const template8 = _$createComponent(Child, {
  get children() {
    return [item => item, item => item];
  }
});

const template9 = _$createComponent(_garbage, {
  children: "Hi"
});

const template10 = _$ssr(
  [
    '<div data-hk="',
    '"><!--#-->',
    "<!--/--> | <!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--></div>"
  ],
  _$getHydrationKey(),
  _$createComponent(Link, {
    children: "new"
  }),
  _$createComponent(Link, {
    children: "comments"
  }),
  _$createComponent(Link, {
    children: "show"
  }),
  _$createComponent(Link, {
    children: "ask"
  }),
  _$createComponent(Link, {
    children: "jobs"
  }),
  _$createComponent(Link, {
    children: "submit"
  })
);

const template11 = _$ssr(
  [
    '<div data-hk="',
    '"><!--#-->',
    "<!--/--> | <!--#-->",
    "<!--/--><!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--><!--#-->",
    "<!--/--> | <!--#-->",
    "<!--/--></div>"
  ],
  _$getHydrationKey(),
  _$createComponent(Link, {
    children: "new"
  }),
  _$createComponent(Link, {
    children: "comments"
  }),
  _$createComponent(Link, {
    children: "show"
  }),
  _$createComponent(Link, {
    children: "ask"
  }),
  _$createComponent(Link, {
    children: "jobs"
  }),
  _$createComponent(Link, {
    children: "submit"
  })
);

const template12 = _$ssr(
  ['<div data-hk="', '"> | <!--#-->', "<!--/--> |  |  | <!--#-->", "<!--/--> | </div>"],
  _$getHydrationKey(),
  _$createComponent(Link, {
    children: "comments"
  }),
  _$createComponent(Link, {
    children: "show"
  })
);

class Template13 {
  render() {
    const _self$ = this;

    _$createComponent(Component, {
      get prop() {
        return _self$.something;
      },

      get children() {
        return _$createComponent(Nested, {
          get prop() {
            return _self$.data;
          },

          get children() {
            return _self$.content;
          }
        });
      }
    });
  }
}
