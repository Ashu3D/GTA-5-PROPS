import{_ as d,aq as f,p as c,o as p,w as o,a as l,X as h,j as b,T as S,e as j,V as $,t as v,v as y,a8 as P,aT as m,a5 as C,N as V,b as _,z as g,O as E,U as T,W as D,aF as L,S as x}from"./mlthweXs.js";const F={props:{visible:{type:Boolean,required:!0},title:{type:String,required:!0},data:{type:Object,required:!0}},emits:["close"],setup(){const{firstLetterToLower:s,firstLetterToUpper:e}=x();return{firstLetterToLower:s,firstLetterToUpper:e}},data(){return{scriptingFormat:"plain",scriptingFormats:[{id:"plain",name:"Plain text",language:"plaintext"},{id:"CSharpEnum",name:"C# Enum",language:"csharp"},{id:"TypeScriptEnum",name:"TypeScript Enum",language:"typescript"}]}},computed:{availableScriptingFormats(){const{data:s}=this;return s?this.scriptingFormats.filter(e=>{const n=`generate${this.firstLetterToUpper(s.name)}${this.firstLetterToUpper(e.id)}`;return Object.hasOwnProperty.call(this,n)&&typeof this[n]=="function"}):[]},scriptingDialogData(){const{data:s,scriptingFormat:e}=this,n=this.availableScriptingFormats.find(a=>a.id===e);if(!(s!=null&&s.name)||!n)return null;let t="Not supported";const r=`generate${this.firstLetterToUpper(s.name)}${this.firstLetterToUpper(n.id)}`;return Object.hasOwnProperty.call(this,r)&&typeof this[r]=="function"&&(t=this[r](s)),{code:t,language:n.language}}},watch:{visible(){this.availableScriptingFormats.find(e=>e.id===this.scriptingFormat)||(this.scriptingFormat="plain")}},methods:{copyScriptingCode(){const{code:s}=this.scriptingDialogData;s&&navigator.clipboard.writeText(s).then(()=>{this.$toast.info("Copied to clipboard!")}).catch(e=>{this.$toast.error("Failed to copy to clipboard!")})},close(){this.$emit("close")},onUpdate(s){s||this.close()},generateVehicleModPlain(s){const e=(n,t="")=>{let r=`${t}${n.values[0]}`;n.values[1]?r+=` | Mod Type: ${n.values[1]} (${n.values[2]}) | Index: ${n.values[3]}
`:r+=`
`;const a=(n.subs||[]).map(u=>e(u,`${t}	`));return r+a.join("")};return s.items.map(n=>e(n)).join(`
`)},generateObjectPlain(s){const e=(n,t="")=>{let r=`${t}${n.values[0]}`;n.values[1]?r+=` | ${n.values[1]}
`:r+=`
`;const a=(n.subs||[]).map(u=>e(u,`${t}	`));return r+a.join("")};return s.items.map(n=>e(n)).join(`
`)},generateObjectCSharpEnum(s){const e=t=>{const r=t.values[1]?`	${t.values[0]} = ${t.values[1]},
`:`	// ${t.values[0]}
`,a=(t.subs||[]).map(u=>e(u));return r+a.join("")};return`public enum ${s.name} : uint
{
${s.items.map(t=>e(t)).join(`
`)}}`.replace(/,(?![^,]*,)/,"")},generateObjectTypeScriptEnum(s){const e=t=>{const r=t.values[1]?`	${t.values[0]} = ${t.values[1]},
`:`	// ${t.values[0]}
`,a=(t.subs||[]).map(u=>e(u));return r+a.join("")};return`enum ${s.name} {
${s.items.map(t=>e(t)).join(`
`)}}`},generatePedPlain(s){return s.items.map(e=>`${e.values[0]} | ${e.values[1]} | ${e.values[2]}`).join(`
`)},generatePedCSharpEnum(s){const e=s.items.map(t=>`	${t.values[0]} = ${t.values[1]}, // ${t.values[2]}`).join(`
`);return`public enum ${s.name} : uint
{
${e}
}`.replace(/,(?![^,]*,)/,"")},generatePedTypeScriptEnum(s){const e=s.items.map(t=>`	${t.values[0]} = ${t.values[1]}, // ${t.values[2]}`).join(`
`);return`enum ${s.name} {
${e}
}`},generateDecorationPlain(s){const e=(n,t="")=>{const r=`${t}${n.values[0]} | ${n.values[1]}${n.values[2]?` | ${n.values[2]}`:""}
`,a=(n.subs||[]).map(u=>e(u,`${t}	`));return r+a.join("")};return s.items.map(n=>e(n)).join(`
`)},generateClothPlain(s){const e=(n,t="")=>{let r="";n.values[2]?r+=`		${n.values[0]} | Drawable Id: ${n.values[1]} | Texture Id: ${n.values[2]}
`:n.values[1]?r+=`	${n.values[0]} | Component Id: ${n.values[1]}
`:r+=`${n.values[0]}
`;const a=(n.subs||[]).map(u=>e(u,`${t}	`));return r+a.join("")};return s.items.map(n=>e(n)).join(`
`)},generateVehicleModelPlain(s){const e=(n,t="")=>{const r=`${t}${n.values[0]} | ${n.values[1]} | ${n.values[2]} | ${n.values[3]} | ${n.values[4]}`,a=(n.subs||[]).map(u=>e(u,`${t}	`));return r+a.join("")};return s.items.map(n=>e(n)).join(`
`)},generateVehicleModelCSharpEnum(s){const e=s.items.map(t=>`	${t.values[0]} = ${t.values[1]}, // [${t.values[2]}] ${t.values[3]} (${t.values[4]})`).join(`
`);return`public enum ${s.name} : uint
{
${e}
}`.replace(/,(?![^,]*,)/,"")},generateVehicleModelTypeScriptEnum(s){const e=s.items.map(t=>`	${t.values[0]} = ${t.values[1]}, // [${t.values[2]}] ${t.values[3]} (${t.values[4]})`).join(`
`);return`enum ${s.name} {
${e}
}`},generateWeaponPlain(s){return s.items.map(e=>{let n=`${e.values[0]} | ${e.values[1]} | ${e.values[2]}
`;n+=`	Name: ${e.values[3]} (${e.values[4]})
`,n+=`	Description: ${e.values[5]}

`;const t=(e.subs||[]).map(r=>{let a=`	${r.values[1]} | ${r.values[2]} | ${r.values[3]}
`;return a+=`	Name: ${r.values[4]} (${r.values[5]})
`,a+=`	Description: ${r.values[6]} (${r.values[7]})
`,a});return n+=`Components:
${t.join(`
`)}
`,n}).join(`
`)},generateWeaponCSharpEnum(s){const e=s.items.map(a=>`	${a.values[0]} = ${a.values[1]}, // [${a.values[2]}] ${a.values[3]} (${a.values[4]})`).join(`
`),n=`public enum ${s.name} : uint
{
${e}
}`.replace(/,(?![^,]*,)/,""),t=s.items.flatMap(a=>(a.subs||[]).map(u=>`	${u.values[1]} = ${u.values[2]}, // [${u.values[3]}] ${u.values[4]} (${u.values[5]})`)).join(`
`),r=`public enum ${s.name}Component : uint
{
${t}
}`.replace(/,(?![^,]*,)/,"");return`${n}

${r}`},generateWeaponTypeScriptEnum(s){const e=s.items.map(a=>`	${a.values[0]} = ${a.values[1]}, // [${a.values[2]}] ${a.values[3]} (${a.values[4]})`).join(`
`),n=`enum ${s.name} {
${e}
}`,t=s.items.flatMap(a=>(a.subs||[]).map(u=>`	${u.values[1]} = ${u.values[2]}, // [${u.values[3]}] ${u.values[4]} (${u.values[5]})`)).join(`
`),r=`enum ${s.name}Component {
${t}
}`;return`${n}

${r}`},generateAnimationPlain(s){return s.items.map(e=>{const n=(e.subs||[]).map(t=>`	${t.values[0]}`).join(`
`);return`${e.values[0]}
${n}
`}).join(`
`)},generateIPLPlain(s){return s.items.map(e=>`${e.values[0]}${e.values[1]?` | Mlo: ${e.values[1]}`:""} | Position: <${e.values[2]}> | Props: ${e.values[3]}`).join(`
`)},generateYMapPlain(s){return s.items.map(e=>`${e.values[0]} | Position: <${e.values[2]}> | Props: ${e.values[3]}`).join(`
`)},generateMloPlain(s){return s.items.map(e=>{const n=`${e.values[0]} | Position: <${e.values[2]}> | Props: ${e.values[1]}`,t=[],r=[];(e.subs||[]).forEach(u=>{u.values[0]==="Location"?t.push(`		Position: <${u.values[2]}> | Interior Id: ${u.values[1]}`):u.values[0]==="EntitySet"&&r.push(`		${u.values[1]} | Visible by default: ${u.values[2]} | Props: ${u.values[3]}`)});const a=[n];return t.length>0&&a.push(`	Locations:
${t.join(`
`)}`),r.length>0&&a.push(`	Entity Sets / Interior Props:
${r.join(`
`)}`),a.join(`
`)}).join(`

`)},generateTimecycleModPlain(s){return s.items.map(e=>`${e.values[0]} | ${e.values[1]} modifications`).join(`
`)},generateAnimpostFxPlain(s){return s.items.map(e=>`${e.values[0]}`).join(`
`)}}};function I(s,e,n,t,r,a){const u=f("highlightjs");return p(),c(L,{"model-value":n.visible,scrollable:"","max-width":"85%",scrim:"rgba(33, 33, 33, 0.4)","onUpdate:modelValue":a.onUpdate},{default:o(()=>[l(h,{border:"sm"},{default:o(()=>[l(S,null,{default:o(()=>[l(j,null,{default:o(()=>[l($,{class:"align-self-center"},{default:o(()=>[v(y(n.title)+" - Scripting information ",1)]),_:1}),l($,null,{default:o(()=>[l(P,{modelValue:r.scriptingFormat,"onUpdate:modelValue":e[0]||(e[0]=i=>r.scriptingFormat=i),label:"Format",items:a.availableScriptingFormats,"item-title":"name","item-value":"id",variant:"solo-filled",density:"compact","hide-details":""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),l(m),a.scriptingDialogData?(p(),c(C,{key:0,style:{"max-height":"75vh"}},{default:o(()=>[l(u,{class:"code-preview",language:a.scriptingDialogData.language,code:a.scriptingDialogData.code,autodetect:!1},{default:o(()=>[l(V,{location:"top","open-on-hover":""},{activator:o(({props:i})=>[l(g,E(i,{ref:"copyButton",icon:"mdi-content-copy",variant:"plain",class:"copy-button",onClick:a.copyScriptingCode}),null,16,["onClick"])]),default:o(()=>[e[1]||(e[1]=_("span",null,"Copy code",-1))]),_:1,__:[1]})]),_:1},8,["language","code"])]),_:1})):b("",!0),l(m),l(T,null,{default:o(()=>[l(D),l(g,{color:"green",variant:"text",onClick:a.close},{default:o(()=>e[2]||(e[2]=[v(" Close ")])),_:1,__:[2]},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["model-value","onUpdate:modelValue"])}const U=d(F,[["render",I]]);export{U as _};
