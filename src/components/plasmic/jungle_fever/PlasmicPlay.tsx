// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: neKnaqAFQgtkJjtbXthdKd
// Component: GEPIXA075Fn-g
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: -5kvBjMJU6nse/component
import TextInput from "../../TextInput"; // plasmic-import: _oRzGL_a2z00t/component
import Button from "../../Button"; // plasmic-import: TmMHvKz8624iV/component
import Footer from "../../Footer"; // plasmic-import: LYimf7BcZyc4G/component

import { useScreenVariants as useScreenVariantsw2FpJ6DWBvL } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: W2fpJ_6d-WBvL/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_jungle_fever.module.css"; // plasmic-import: neKnaqAFQgtkJjtbXthdKd/projectcss
import sty from "./PlasmicPlay.module.css"; // plasmic-import: GEPIXA075Fn-g/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: 9x2RT-jPTsI_B4/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: QIFkDJ_ce_gClo/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: wIv3yetKUg72by/icon

export type PlasmicPlay__VariantMembers = {};

export type PlasmicPlay__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlay__VariantsArgs;
export const PlasmicPlay__VariantProps = new Array<VariantPropType>();

export type PlasmicPlay__ArgsType = {};
type ArgPropType = keyof PlasmicPlay__ArgsType;
export const PlasmicPlay__ArgProps = new Array<ArgPropType>();

export type PlasmicPlay__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  section?: p.Flex<"section">;
  text?: p.Flex<"div">;
  textBox?: p.Flex<"div">;
  amountInput?: p.Flex<typeof TextInput>;
  play?: p.Flex<typeof Button>;
  action?: p.Flex<typeof Button>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPlayProps {
  className?: string;
}

function PlasmicPlay__RenderFunc(props: {
  variants: PlasmicPlay__VariantsArgs;
  args: PlasmicPlay__ArgsType;
  overrides: PlasmicPlay__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsw2FpJ6DWBvL()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__ktqm0)}>
              <p.Stack
                as={"section"}
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                hasGap={true}
                className={classNames(projectcss.all, sty.section)}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {
                    "Please click on the button so we can verify if you own the right NFT."
                  }
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__mebt6)}>
                  <div
                    data-plasmic-name={"textBox"}
                    data-plasmic-override={overrides.textBox}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.textBox
                    )}
                  >
                    {"\"We've got jungle fever, we're in love.\""}
                  </div>
                </div>

                {true ? (
                  <TextInput
                    data-plasmic-name={"amountInput"}
                    data-plasmic-override={overrides.amountInput}
                    className={classNames("__wab_instance", sty.amountInput)}
                    name={"amountInput" as const}
                  />
                ) : null}
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__rbH8K)}
                  >
                    <Button
                      data-plasmic-name={"play"}
                      data-plasmic-override={overrides.play}
                      className={classNames("__wab_instance", sty.play)}
                    >
                      {"Verify"}
                    </Button>

                    {true ? (
                      <Button
                        data-plasmic-name={"action"}
                        data-plasmic-override={overrides.action}
                        className={classNames("__wab_instance", sty.action)}
                        color={"blue" as const}
                      >
                        {"Action"}
                      </Button>
                    ) : null}
                  </p.Stack>
                ) : null}
              </p.Stack>
            </div>
          ) : null}

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "section",
    "text",
    "textBox",
    "amountInput",
    "play",
    "action",
    "footer"
  ],
  header: ["header"],
  section: ["section", "text", "textBox", "amountInput", "play", "action"],
  text: ["text"],
  textBox: ["textBox"],
  amountInput: ["amountInput"],
  play: ["play"],
  action: ["action"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  section: "section";
  text: "div";
  textBox: "div";
  amountInput: typeof TextInput;
  play: typeof Button;
  action: typeof Button;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlay__VariantsArgs;
    args?: PlasmicPlay__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPlay__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPlay__ArgProps,
          internalVariantPropNames: PlasmicPlay__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPlay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlay";
  } else {
    func.displayName = `PlasmicPlay.${nodeName}`;
  }
  return func;
}

export const PlasmicPlay = Object.assign(
  // Top-level PlasmicPlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    text: makeNodeComponent("text"),
    textBox: makeNodeComponent("textBox"),
    amountInput: makeNodeComponent("amountInput"),
    play: makeNodeComponent("play"),
    action: makeNodeComponent("action"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPlay
    internalVariantProps: PlasmicPlay__VariantProps,
    internalArgProps: PlasmicPlay__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPlay;
/* prettier-ignore-end */
