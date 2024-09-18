"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5448],{222267:(e,n,a)=>{var i;a.r(n),a.d(n,{default:()=>t});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetNormalizedPinImage_pin",selections:[{alias:"imageSpec_564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:'images(spec:"564x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"736x")'},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"orig")'},{alias:"imageSpec_474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"474x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"236x")'}],type:"Pin",abstractKey:null};l.hash="3d7a6d04f923d00acfb2887f852aea16";let t=l},853708:(e,n,a)=>{var i;a.r(n),a.d(n,{default:()=>t});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useNormalizePinData_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"closeupUnifiedDescription",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"closeupUnifiedTitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"category",storageKey:null},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'images(spec:"orig")'},{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:i=[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"OfferSummary",kind:"LinkedField",name:"offerSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:i,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackedLink",storageKey:null}],type:"Pin",abstractKey:null};l.hash="01a93671cde480baa2cfd8b781589acd";let t=l},890030:(e,n,a)=>{var i;a.r(n),a.d(n,{default:()=>t});let l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinImageUrls_pin",selections:[{alias:"imageSpec_60x60",args:[{kind:"Literal",name:"spec",value:"60x60"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'images(spec:"60x60")'},{alias:"imageSpec_136x136",args:[{kind:"Literal",name:"spec",value:"136x136"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"136x136")'},{alias:"imageSpec_170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"170x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"236x")'},{alias:"imageSpec_474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"474x")'},{alias:"imageSpec_564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"564x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"736x")'},{alias:"imageSpec_600x315",args:[{kind:"Literal",name:"spec",value:"600x315"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"600x315")'},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"orig")'}],type:"Pin",abstractKey:null};l.hash="b7ea441f2c20a68b323088ebe3847835";let t=l},892254:(e,n,a)=>{a.d(n,{$:()=>d,r:()=>u});var i=a(667294),l=a(342513),t=a(321329),r=a(5859),s=a(494125),o=a(785893);let{Provider:c,useHook:d}=(0,l.Z)("PinRep");function u({children:e}){let{isAuthenticated:n}=(0,r.B)(),[a,l]=(0,i.useState)(!0),[d,u]=(0,i.useState)(!1),m=(0,t.Z)(1000069);(0,s.Z)(()=>{(async()=>{if(!n){l(!1);return}let e=await m.fetchAllExperiences();e&&e.payload&&e.payload.experiences?.[1000069]?.experience_id===500417&&e.payload.experiences?.[1000069]?.display_data.hide_footer?m.viewExperience(1000069,500417):l(!1),u(!0)})()});let g=(0,i.useMemo)(()=>({hasSimplifiedPinGridExpLoaded:d,hidePinRepFooter:a}),[d,a]);return(0,o.jsx)(c,{value:g,children:e})}},160408:(e,n,a)=>{a.d(n,{Z:()=>c});var i=a(667294),l=a(883119),t=a(140017),r=a(340523),s=a(5859),o=a(785893);function c({collapsed:e,displayViewState:n,forceTappableHeader:a,headerHeight:c,headerPaddingRight:d,headerPreview:u,heading:m,onClick:g,showArrow:p}){let _=(0,t.ZP)(),{checkExperiment:h}=(0,r.F)(),{isAuthenticated:y}=(0,s.B)(),x=y?h("auth_closeup_redesign").anyEnabled:h("unauth_closeup_redesign").anyEnabled;return(0,o.jsx)(i.Fragment,{children:a||null!==n?(0,o.jsx)(l.iP,{onTap:g,children:(0,o.jsxs)(l.kC,{alignItems:"center",dataTestId:"collapsible-header",direction:"row",flex:"grow",height:c,justifyContent:"between",children:[(0,o.jsx)(l.X6,{accessibilityLevel:2,align:"start",id:"comments-heading",size:x?"300":"400",children:m}),(0,o.jsxs)(l.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{paddingRight:d}},direction:"row",display:"flex",children:[e&&u,p&&(0,o.jsx)(l.xu,{alignItems:"center","data-test-id":"collapse-button",display:"flex",justifyContent:"center",marginStart:u?-1:0,width:48,children:(0,o.jsx)(l.JO,{accessibilityLabel:_.bt("Développer l’icône", "Expand icon", "accordion.actionButton", undefined, true),color:"default",icon:e?"arrow-down":"arrow-up"})})]})]})}):(0,o.jsx)(l.X6,{accessibilityLevel:2,align:"start",id:"comments-heading",size:"400",children:m})})}},230556:(e,n,a)=>{a.d(n,{n:()=>i});let i="300"},249123:(e,n,a)=>{a.d(n,{Z:()=>c});var i=a(667294),l=a(883119),t=a(230556),r=a(696534),s=a(140017),o=a(785893);function c({children:e,maxLines:n=10}){let a=(0,i.useRef)(null),[c,d]=(0,i.useState)({isFirstLoad:!0,isTruncated:!1}),u=(0,s.ZP)(),m=(0,r.vs)()?"#111":"#fff",{isFirstLoad:g,isTruncated:p}=c;return(0,i.useEffect)(()=>{let e;g&&a.current&&((e=a.current).offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&d({isFirstLoad:!1,isTruncated:!0})},[g,p]),(0,o.jsxs)(l.xu,{"data-test-id":"truncated-text",position:"relative",children:[(0,o.jsx)(l.xv,{ref:a,inline:!0,lineClamp:g||p?n:0,children:e}),p&&(0,o.jsx)(l.xu,{bottom:!0,display:"block",position:"absolute",width:"100%",children:(0,o.jsxs)(l.kC,{flex:"grow",children:[(0,o.jsx)(l.xu,{display:"inlineBlock",height:"14px",width:"120px"}),(0,o.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{paddingLeft:15,background:`linear-gradient(90deg, transparent 0%, ${m} 15%)`}},"data-test-id":"more-button",display:"inlineBlock",children:(0,o.jsx)(l.iP,{fullWidth:!1,onTap:()=>d({...c,isTruncated:!1}),children:(0,o.jsx)(l.xv,{inline:!0,size:t.n,weight:"bold",children:u.bt(" … plus", " … more", "closeup.TruncatedTextContent.moreLabel", undefined, true)})})}),(0,o.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{background:m}},display:"inlineBlock",flex:"grow"})]})})]})}},513911:(e,n,a)=>{a.d(n,{I6:()=>l,Nv:()=>i,RZ:()=>t,ZG:()=>o,b9:()=>s,mV:()=>c,s0:()=>r});let i=44,l=24,t=446,r=.05,s=36,o=20,c=16},135839:(e,n,a)=>{a.d(n,{Z:()=>t,k:()=>i});let i={LONG:"long",YEAR:"year",WEEKDAY_DATE:"weekday_date",WEEKDAY_DATE_TIME_TIMEZONE:"weekday_date_time_timezone",SHORT_WEEKDAY_DATE:"short_weekday_date",LONG_MONTH_YEAR:"long_month_year",NUMERIC:"numeric",MONTH_DAY:"month_day",SHORT_MONTH:"short_month",SHORT_MONTH_DAY:"short_month_day",DAY:"day",YEAR_SHORT_MONTH_DAY:"year_short_month_day",YEAR_SHORT_MONTH_DAY_HOUR:"year_short_month_day_hour",TIME:"time",TIME_TIMEZONE:"time_timezone",HOUR:"hour",TWO_DIGIT:"two_digit",TWO_DIGIT_YEAR:"two_digit_year"},l=function(e){switch(e){case i.YEAR:return{year:"numeric"};case i.LONG:return{year:"numeric",month:"long",day:"numeric"};case i.NUMERIC:return{year:"numeric",month:"numeric",day:"numeric"};case i.TWO_DIGIT:return{year:"numeric",month:"2-digit",day:"2-digit"};case i.TWO_DIGIT_YEAR:return{year:"2-digit",month:"2-digit",day:"2-digit"};case i.WEEKDAY_DATE:return{weekday:"long",month:"long",day:"numeric",year:"numeric"};case i.SHORT_WEEKDAY_DATE:return{weekday:"short",month:"numeric",day:"numeric"};case i.WEEKDAY_DATE_TIME_TIMEZONE:return{weekday:"short",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"};case i.MONTH_DAY:return{month:"long",day:"numeric"};case i.SHORT_MONTH:return{month:"short"};case i.SHORT_MONTH_DAY:return{month:"short",day:"numeric"};case i.DAY:return{day:"numeric"};case i.LONG_MONTH_YEAR:return{month:"long",year:"numeric"};case i.YEAR_SHORT_MONTH_DAY:return{year:"numeric",month:"short",day:"numeric"};case i.YEAR_SHORT_MONTH_DAY_HOUR:return{month:"short",year:"numeric",day:"numeric",hour:"numeric"};case i.TIME:return{hour:"numeric",minute:"2-digit"};case i.TIME_TIMEZONE:return{hour:"numeric",minute:"2-digit",timeZoneName:"short"};case i.HOUR:return{hour:"numeric"};default:throw Error('invalid dateFormatType "'+e+'"')}};function t(e,n,a,i=!0){let r=l(a);return i&&(r.timeZone="UTC"),new Intl.DateTimeFormat(e,r).format(n)}},405459:(e,n,a)=>{a.d(n,{Z:()=>o});var i=a(167912),l=a(244311),t=a(698681),r=a(226618);function s(e){let[n,a]=e.reduce((e,n)=>("ScalarField"===n.kind&&"__typename"===n.name?e[0].push(n.alias??n.name):e[1].push(n),e),[[],[]]);return[n,a]}let o=function({strategy:e,query:n,variables:a,options:o,transformGraphQL:c,useGetLegacyData:d,useGetLegacyResource:u,useGetLegacyPaginatedResource:m,useGetLegacyData__EXPERIMENTAL:g,rootFieldName:p,type1:_,type2:h,connectionName:y}){if("GRAPHQL"===e){let e=(0,l.getRequest)(n);return null!=c?c((0,i.useLazyLoadQuery)(e,a,o)):(0,i.useLazyLoadQuery)(e,a,o)}if(null!=d&&null!=u&&null!=m&&null!=g)throw Error("Only pass one of those calls from the list: \n[useGetLegacyData, useGetLegacyResource, useGetLegacyPaginatedResource, useGetLegacyData__EXPERIMENTAL]\nto useLazyLoadQueryOrLegacy");if(null!=g){let e=g(a);if(!e)return null;let{selections:i}=(0,l.getRequest)(n).fragment;return function(e,n){let a={};return!function e(n,a,i){let l=function(e){let[n,a]=function(e){let[n,a]=e.reduce((e,n)=>("InlineFragment"===n.kind?e[0].push(n):e[1].push(n),e),[[],[]]);return[n,a]}(e);if(1===n.length){let[e,i]=s(a);if(0===i.length){let[a,i]=s(n[0].selections),l=[...e,...a];return 0===l.length?{kind:"Uncategorized"}:{kind:"InlineFragmentWithTypename",typenameAliases:l,selections:i,concreteType:n[0].type}}}else if(1===e.length&&"LinkedField"===e[0].kind){let n=e[0];if(n.plural)return{kind:"Uncategorized"};if(null==n.concreteType)return{kind:"OnlyLinkedFieldAndTypename",selections:n.selections,name:n.name,concreteTypeAndAliases:null};let[a,i]=s(n.selections);return{kind:"OnlyLinkedFieldAndTypename",selections:i,name:n.name,concreteTypeAndAliases:{concreteType:n.concreteType,typenameAliases:a}}}else if(e.length>=1&&"FragmentSpread"===e[0].kind&&e.every(e=>"FragmentSpread"===e.kind))return{kind:"OnlyFragmentSpread"};return{kind:"Uncategorized"}}(n);switch(l.kind){case"InlineFragmentWithTypename":a.__typename=l.concreteType,e(l.selections,a,i);break;case"OnlyFragmentSpread":(0,r.I9)(a,{kind:"LegacyData",data:i,refetchInfo:null,paginationInfo:null});break;case"OnlyLinkedFieldAndTypename":{let{name:n,selections:t,concreteTypeAndAliases:r}=l,s={};if(a[n]=s,r&&r.typenameAliases.length>0){let{concreteType:e,typenameAliases:n}=r;for(let a of n)s[a]=e}e(t,s,i);break}default:throw Error("The query passed to useLazyLoadQueryOrLegacy contained unsupported/uncategorized elements. Please simplify the query.")}}(e,a,n),a}(i,e)}if(null!=d){let e=d(a);return e?(0,r.I9)({},{data:e,refetchInfo:null,paginationInfo:null,kind:"LegacyData"}):null}if(null!=u){let{data:e,refresh:n}=u(a);return null==e?null:(0,r.I9)({},{data:e,kind:"LegacyData",refetchInfo:{refetch:n},paginationInfo:null})}if(null!=m){let{data:e,refresh:n,isFetching:i,isAtEnd:s,fetchMore:o}=m(a);if(null==e)return null;if(null==p||null==_||null==h||null==y)throw Error("Unexpected null param");return(0,r.I9)({},{kind:"LegacyData",data:{id:l.ROOT_ID,[(0,t.Cs)(p)]:{type:_,data:{type:h,[(0,t.Cs)(`__${y}_connection`)]:{edges:e.map(e=>({node:e}))}}}},refetchInfo:{refetch:n},paginationInfo:{isLoadingNext:i,hasNext:!s,loadNext:o}})}throw Error("useGetLegacyData or useGetLegacyResource must be provided")}},388769:(e,n,a)=>{a.d(n,{Z:()=>r});var i=a(72461),l=a(5859),t=a(785893);let r=({currency:e,maximumFractionDigits:n,minimumFractionDigits:a,shortform:r,shortformMaximumFractionDigits:s,formatStyle:o,uplimit:c,value:d})=>{let u=(0,i.Z)();return(0,t.jsx)(l.LC,{children:i=>u(i.locale||"en-US",d,{currency:e,maximum_fraction_digits:n,minimum_fraction_digits:a,shortform:r,shortform_maximum_fraction_digits:s,style:o,uplimit:c})})}},391884:(e,n,a)=>{a.d(n,{Z:()=>i});function i({embedSrc:e,embedType:n,imagesUrls:a,preferredResolution:i,excludeOriginals:l}){if(!e&&!n&&!a)return"";if("gif"===n)return e||"";if(!a)return"";if(i){let e="474x"===i&&a["474x"]||"236x"===i&&a["236x"]||a["736x"];if(e)return e}let t=Object.keys(a).reduce((e,n)=>{try{let i=n.split("x")[0];if(Number.isNaN(Number(i)))return{...e,[n]:a[n]};return{...e,[i]:a[n]}}catch(n){return e}},{}),r=Object.keys(t);return l&&"orig"===r[r.length-1]&&r.pop(),t[r.pop()]||""}},777609:(e,n,a)=>{a.d(n,{Z:()=>s});var i,l=a(667294);a(167912);var t=a(207012);let r=void 0!==i?i:i=a(222267);function s({pinKey:e,maxWidth:n}){let a=(0,t.Z)(r,e),i=a?.imageSpec_564x||a?.imageSpec_736x||a?.imageSpec_orig||a?.imageSpec_474x||a?.imageSpec_236x,s=i?.width||1,o=i?.height||1,c=i?.url||"",d=function(e,n,a=564){return e>a&&(n*=a/e,e=a),{width:e,height:n}}(s,o,n);return{getNormalizedPinImage:(0,l.useCallback)(()=>({width:d.width,height:d.height,url:c}),[d.height,d.width,c])}}},781705:(e,n,a)=>{a.d(n,{Z:()=>s}),a(167912);var i,l=a(207012),t=a(140017);let r=void 0!==i?i:i=a(853708),s=e=>{let n;let a=(0,t.ZP)(),i=(0,l.Z)(r,e),s=i.trackedLink||i.link||i.imageSpec_orig&&i.imageSpec_orig.url,{richMetadata:o,richSummary:c}=i,d=a.bt("Enregistrée depuis ", "Saved from ", "Closeup pin annotation", undefined, true);return o&&o.products&&o.products[0]&&o&&o.products[0].name&&o.products[0].offerSummary&&(d=a.bt("Produit vendu par ", "Product sold by ", "pin annotation", undefined, true),n=(o.products?.[0]||void 0)?.offerSummary),!n&&c&&c&&c.products&&c.products[0]&&c&&c.products[0].name&&c.products[0].offerSummary&&(d=a.bt("Produit vendu par ", "Product sold by ", "pin annotation", undefined, true)),{pinLink:s,pinCreditPrefix:d,pinTitle:i.closeupUnifiedTitle,pinDescription:i.closeupUnifiedDescription,pinCategory:i.category}}},661428:(e,n,a)=>{a.d(n,{Z:()=>r}),a(167912);var i,l=a(207012);let t=void 0!==i?i:i=a(890030),r=e=>{let n=(0,l.Z)(t,e);return[["60x60",n?.imageSpec_60x60],["136x136",n?.imageSpec_136x136],["170x",n?.imageSpec_170x],["236x",n?.imageSpec_236x],["474x",n?.imageSpec_474x],["564x",n?.imageSpec_564x],["736x",n?.imageSpec_736x],["600x315",n?.imageSpec_600x315],["orig",n?.imageSpec_orig]].reduce((e,[n,a])=>a?{...e,[n]:a.url}:e,{})}},414131:(e,n,a)=>{a.d(n,{Z:()=>i});function i({hasPin:e,hasPinRichMetadata:n,hasPinRichMetadataProducts:a,hasPinRichMetadataArticle:i,hasPinRichMetadataRecipe:l,hasPinStoryPinData:t}){if(e){if(n)return a?144:i?141:l?145:139;if(t)return 157}return 140}},686769:(e,n,a)=>{a.d(n,{A:()=>r,Z:()=>s});var i=a(667294),l=a(883119),t=a(785893);let r=({fill:e})=>{let n="half"===e?(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(l.xu,{position:"absolute",children:(0,t.jsx)(l.JO,{accessibilityLabel:"",color:"default",icon:"star-half",size:12})}),(0,t.jsx)(l.JO,{accessibilityLabel:"",color:"subtle",icon:"star",size:12})]}):(0,t.jsx)(l.JO,{accessibilityLabel:"",color:"full"===e?"default":"subtle",icon:"star",size:12});return(0,t.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{marginRight:"3px"}},"data-test-id":`rating-star-${e}`,display:"inlineBlock",children:n})};function s({max_rating:e,rating:n}){var a;let i=[],s=parseFloat(e)||5,o=5*(a=(a=parseFloat(n)||0)<=s?a:s)/s;if(Number.isNaN(o))return null;let c=Math.floor(o),d=o-c;return[...Array(c).keys()].forEach(e=>i.push((0,t.jsx)(r,{fill:"full"},e))),d>=.75?i.push((0,t.jsx)(r,{fill:"full"},i.length)):d>=.25&&i.push((0,t.jsx)(r,{fill:"half"},i.length)),[...Array(5-i.length).keys()].forEach(()=>i.push((0,t.jsx)(r,{fill:"empty"},i.length))),(0,t.jsx)(l.xu,{display:"inlineBlock",position:"relative",width:15*s,children:i})}},909886:(e,n,a)=>{a.d(n,{Z:()=>g});var i=a(667294),l=a(883119),t=a(230556),r=a(249123),s=a(140017),o=a(785893);function c({category:e,ingredients:n,textSize:a="300"}){return(0,o.jsxs)(l.xu,{children:[e&&(0,o.jsx)(l.xu,{children:(0,o.jsx)(l.xv,{size:a,weight:"bold",children:e})}),(0,o.jsx)("ul",{children:n.map((e,n)=>(0,o.jsx)("li",{"data-test-id":"recipe-ingredient",itemProp:"recipeIngredient",children:(0,o.jsx)(l.xu,{marginTop:1,children:(0,o.jsxs)(l.xv,{size:a,children:["• ",e.amt||null," ",e.name]})})},n))})]})}var d=a(177021),u=a(153896),m=a(923368);function g({recipeProps:e,marginOverrides:n}){let a=(0,s.ZP)(),{image:g,name:p,categorizedIngredients:_}=e.recipe,{stackedCloseupEnabled:h}=(0,m.x4)(),y=a.bt("Ingrédients", "Ingredients", "Ingredients title and count in closeup recipe description", undefined, true);if(_&&_.length){let e=[];_.forEach(n=>e.push(n.ingredients))}return(0,o.jsx)(l.xu,{marginTop:h?0:8,children:(0,o.jsxs)(d.Z,{itemScope:!0,itemType:"https://schema.org/Recipe",children:[(0,o.jsx)("meta",{content:p,itemProp:"name"}),(0,o.jsx)("meta",{content:g,itemProp:"image"}),(0,o.jsx)(u.Z,{heading:y,children:(0,o.jsx)(r.Z,{children:(0,o.jsx)(l.xu,{marginTop:4,children:_.map(({category:e,ingredients:a},r)=>{let s=`ingredient-${r}`;return(0,o.jsx)(i.Fragment,{children:(0,o.jsx)(l.xu,{marginBottom:n?.ingredientMarginBottom||4,children:(0,o.jsx)(c,{category:e,ingredients:a,textSize:t.n})})},s)})})})})]})})}},177021:(e,n,a)=>{a.d(n,{Z:()=>l});var i=a(785893);let l=e=>{let n=e.itemType?{itemScope:!0,itemType:e.itemType}:{};return(0,i.jsx)("div",{"data-test-id":"rich-pin-information",...n,children:e.children||null})}},414630:(e,n,a)=>{a.d(n,{Ht:()=>t,Tb:()=>l});var i=a(447479);function l({appliedFilters:e,appliedProductFilters:n,autoCorrectionDisabled:a,filters:i,journeyDepth:l,query:t,rs:r,scope:s,selectedOneBarModules:o,selectedPinImgSig:c,sourceModuleId:d,user:u}){let m=[n,i,l,t,r,s,o,c,d,e?.filters?e.filters.map(e=>e?.filter_id).join("-"):"",u].map(e=>e??"").join(":");return a?"auto-correction-disabled:"+m:m}function t(e){let{appliedFilters:n,appliedProductFilters:a,autoCorrectionDisabled:l,bubbleId:t,domains:r,filters:s,guidedSearchQuery:o,journeyDepth:c,pageSize:d,priceMax:u,priceMin:m,query:g,rs:p,scope:_,selectedOneBarModules:h,selectedPinImgSig:y,sourceModuleId:x,topPinId:f,user:k}=e;return{name:"BaseSearchResource",options:function({appliedFilters:e=null,appliedProductFilters:n=null,autoCorrectionDisabled:a=!1,bubbleId:l=null,domains:t=null,filters:r=null,journeyDepth:s=null,pageSize:o=null,priceMax:c=null,priceMin:d=null,query:u=null,rs:m=i.i.DIRECT_NAVIGATION,scope:g="pins",selectedOneBarModules:p=null,selectedPinImgSig:_=null,sourceId:h=null,sourceModuleId:y=null,topPinId:x=null,user:f}){return{applied_filters:e,appliedProductFilters:n,article:l,auto_correction_disabled:a,corpus:_?"personalize":null,customized_rerank_type:_?"manas_graph_sage_only_wand_rewrite":null,domains:t,filters:r,journey_depth:s,page_size:o,price_max:c,price_min:d,query_pin_sigs:_,query:u,redux_normalize_feed:!0,rs:m,scope:g,selected_one_bar_modules:p,source_id:h,source_module_id:y,top_pin_id:x,user:f}}({appliedFilters:n,appliedProductFilters:a,autoCorrectionDisabled:!!l,bubbleId:t,domains:r,filters:s,guidedSearchQuery:o,journeyDepth:c,pageSize:d,priceMax:u,priceMin:m,query:g,rs:p,scope:_,selectedOneBarModules:h,selectedPinImgSig:y,sourceModuleId:x,topPinId:f,user:k})}}},520846:(e,n,a)=>{a.d(n,{Z:()=>i});function i({cropArea:e,scaledWidth:n,scaledHeight:a}){let i=e.h||0;return{h:Math.floor(i*a),w:Math.floor((e.w||0)*n),x:Math.floor((e.x||0)*n),y:Math.floor((e.y||0)*a)}}},258194:(e,n,a)=>{a.d(n,{Z:()=>i});function i({cropArea:e,cropSource:n,requestParams:a,searchQuery:i,surfaceType:l,title:t,trafficSource:r}){let s=[];if(e){let{x:n,y:a,w:i,h:l}=e;n>=0&&a>=0&&i>=0&&l>=0&&s.push(`x=${n}`,`y=${a}`,`w=${i}`,`h=${l}`)}return n&&s.push(`cropSource=${n}`),l&&s.push(`surfaceType=${l}`),t&&s.push(`full_feed_title=${encodeURIComponent(t)}`),i&&s.push(`q=${i}`),r&&"unknown"!==r&&s.push(`rs=${r}`),a&&s.push(`requestParams=${encodeURIComponent(a)}`),s.length?`?${s.join("&")}`:""}},755453:(e,n,a)=>{a.d(n,{Z:()=>l});var i=a(258194);function l({cropArea:e,cropSource:n,isProductPage:a,pinId:l,requestParams:t,searchQuery:r,surfaceType:s,title:o,trafficSource:c}){let d=(0,i.Z)({cropArea:e,cropSource:n,requestParams:t,searchQuery:r,surfaceType:s,title:o,trafficSource:c}),u="";return a&&(u="products/"),`/pin/${l}/visual-search/${u}${d}`}},83255:(e,n,a)=>{a.d(n,{E:()=>i,Z:()=>t});let{Provider:i,useHook:l}=(0,a(342513).Z)("VerticalNav",{width:0}),t=l},589564:(e,n,a)=>{a.d(n,{Z:()=>l});var i=a(83255);function l(){let{width:e}=(0,i.Z)();return e}},153896:(e,n,a)=>{a.d(n,{Z:()=>m});var i=a(667294),l=a(883119),t=a(160408),r=a(214877),s=a(340523),o=a(5859),c=a(554786),d=a(923368),u=a(785893);function m({auxData:e,children:n,collapseButtonElementType:a,collapseByDefault:m=!0,componentType:g,displayViewState:p,expandButtonElementType:_,forceTappableHeader:h,headerHeight:y,headerPaddingRight:x,headerPreview:f,heading:k,viewParameter:T,viewType:S}){let L=(0,c.HG)(),{checkExperiment:I}=(0,s.F)(),{isAuthenticated:v,isBot:E}=(0,o.B)(),{logContextEvent:b}=(0,r.v)(),{setIsShoppingModuleExpanded:A}=(0,d.x4)(),D=!L&&I(v?"closeup_auth_mweb_collapsable_modules":"closeup_unauth_mweb_collapsable_modules").group||"",j=["no_collapse_by_default","collapse_by_default"].includes(D),[O,w]=(0,i.useState)(j&&!E&&"collapse_by_default"===D&&m||[1,2].includes(p));return(0,i.useEffect)(()=>{A(!O)},[]),(0,u.jsxs)(l.kC,{dataTestId:"collapsible-layout",direction:"column",gap:j?4:0,children:[(0,u.jsx)(t.Z,{collapsed:O,displayViewState:p,forceTappableHeader:h,headerHeight:y,headerPaddingRight:x,headerPreview:f,heading:k,onClick:()=>{w(!O),A&&A(O),b({aux_data:e,component:g,element:O?_:a,event_type:L?101:102,view_parameter:T,view_type:S})},showArrow:!0}),!O&&(0,u.jsx)(l.xu,{children:n})]})}},822592:(e,n,a)=>{a.d(n,{Z:()=>r});var i=a(883119),l=a(67664),t=a(785893);function r({coverImages:e,height:n,isHovered:a,onClick:r,onMouseEnter:s,onMouseLeave:o,textType:c,text:d,url:u,width:m}){let g=e&&(e["236x"]||e["280x280"]);return(0,t.jsx)(l.Z,{backgroundColor:"gray",coverImage:g,height:n,isHovered:a,onClick:r,onMouseEnter:s,onMouseLeave:o,url:u,width:m,children:(0,t.jsx)(i.xu,{alignItems:"center",display:"flex",height:n,justifyContent:"center",padding:3,position:"absolute",top:!0,width:m||"100%",children:"text"===c?(0,t.jsx)(i.xu,{alignItems:"center",display:"flex",height:48,padding:3,children:(0,t.jsx)(i.X6,{align:"center",color:"light",size:"500",children:d})}):(0,t.jsx)(i.xu,{alignItems:"center",color:"secondary",display:"flex",height:48,padding:3,rounding:"pill",children:(0,t.jsx)(i.xv,{align:"center",weight:"bold",children:d})})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/5448.fr-17597dcbe8ef8eb4.mjs.map