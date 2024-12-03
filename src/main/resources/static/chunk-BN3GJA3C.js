import{D as k,E as ee,F as te,G as ie,H as ne,K as oe,d as D,g as O,h as H,k as R,l as z,m as L,n as j,o as A,p as G,r as V,s as J,u as Q,v as K,w as X,x as Y,y as Z,z as $}from"./chunk-JCOYJQZF.js";import{$a as w,Bb as c,Cb as h,Db as g,Fb as U,Gb as _,Na as r,Oa as x,ba as F,cb as l,fb as u,g as M,hb as t,ib as n,ja as b,jb as m,ka as v,kb as B,lb as E,nb as T,ob as p,pb as f,pc as I,tb as N,ub as W,vb as P,xb as d}from"./chunk-S75CAB2Z.js";var S=()=>({width:"300px"}),q=()=>({width:"160px"}),ae=()=>({width:"220px"});function le(C,re){if(C&1){let o=T();t(0,"div",57)(1,"p-button",58),p("onClick",function(){b(o);let e=f();return v(e.toggleBold())}),m(2,"i",59),n(),t(3,"p-button",58),p("onClick",function(){b(o);let e=f();return v(e.toggleItalic())}),m(4,"i",60),n(),t(5,"p-button",61),p("onClick",function(){b(o);let e=f();return v(e.toggleUnderline())}),m(6,"i",62),n()()}if(C&2){let o=f();r(),l("text",!0)("raised",!0)("disabled",!o.isTextNavigation),r(2),l("text",!0)("raised",!0)("disabled",!o.isTextNavigation),r(2),l("text",!0)("raised",!0)("disabled",!o.isTextNavigation)}}function se(C,re){if(C&1){let o=T();B(0),t(1,"p-button",29),p("onClick",function(){b(o);let e=f();return v(e.saveOrUpdateCheque())}),t(2,"div",30),m(3,"img",63),t(4,"span",32),d(5,"Save"),n()()(),t(6,"p-button",29),p("onClick",function(){b(o);let e=f();return v(e.clear())}),t(7,"div",30),m(8,"img",33),t(9,"span",32),d(10,"Cancel"),n()()(),t(11,"p-button",34),p("onClick",function(){b(o);let e=f();return v(e.navigateToPrintMaster())}),t(12,"div",30),m(13,"i",35),t(14,"span",32),d(15," Go to Print"),n()()(),E()}C&2&&(r(),l("text",!0)("raised",!0),r(5),l("text",!0)("raised",!0),r(5),l("text",!0)("raised",!0))}var We=(()=>{class C{chequeService;messageService;confirmationService;router;uploadFileURL=ee.apiUrl+"/api/upload";isSaveCancelButtonShow=!0;banks;selectedBank;fileUploadResponse;saveChequeResponse;savedCheque;chequeWidth=0;chequeHeight=0;uploadFilePath="";selectedFileName="";selectedChequeObject;selectedBankName="";tabActiveIndex=0;isDisplayApplyBtn=!0;imageURL="";uploadFileFlag=!1;isTextNavigation=!1;imageComponent;constructor(o,s,e,a){this.chequeService=o,this.messageService=s,this.confirmationService=e,this.router=a}ngOnInit(){this.fetchBanks()}onUpload(o){this.fileUploadResponse=o.originalEvent.body,this.uploadFilePath=this.fileUploadResponse.filePath,this.imageComponent&&(this.imageURL=this.uploadFileURL+"/files/"+this.fileUploadResponse.fileName,this.imageComponent.loadBackgroundImage(this.cmToPixels(this.chequeWidth),this.cmToPixels(this.chequeHeight),this.imageURL),this.isDisplayApplyBtn=!1,this.uploadFileFlag=!0),this.messageService.add({severity:"success",summary:"success",detail:"The cheque image was uploaded successfully!"})}activeIndexChange(o){this.tabActiveIndex=o,o===2?this.isSaveCancelButtonShow=!1:this.isSaveCancelButtonShow=!0,this.selectedBank=null,this.clear()}exportJSON(){this.imageComponent&&this.imageComponent.exportJSON()}moveText(o){this.imageComponent&&this.imageComponent.moveText(o)}increaseTextboxWidth(){this.imageComponent&&this.imageComponent.increaseTextboxWidth()}decreaseTextboxWidth(){this.imageComponent&&this.imageComponent.decreaseTextboxWidth()}increaseFontSize(){this.imageComponent&&this.imageComponent.increaseFontSize()}decreaseFontSize(){this.imageComponent&&this.imageComponent.decreaseFontSize()}toggleBold(){this.imageComponent&&this.imageComponent.toggleBold()}toggleItalic(){this.imageComponent&&this.imageComponent.toggleItalic()}toggleUnderline(){this.imageComponent&&this.imageComponent.toggleUnderline()}fetchBanks(){this.chequeService.getBanks().subscribe({next:o=>{this.banks=o},error:o=>{console.error("Error fetching banks:",o)},complete:()=>{console.log("Fetching banks complete.")}})}fetchCheque(){this.selectedBank&&this.chequeService.getCheque(this.selectedBank.id).subscribe({next:o=>{this.savedCheque=o,this.selectedChequeObject=o,this.selectedBankName=o.bankName,this.chequeWidth=o.chequeWidth,this.chequeHeight=o.chequeHeight,this.imageComponent&&this.imageComponent.resizeAndLoadCanvas(o),this.messageService.add({severity:"success",summary:"success",detail:"Cheque information retrieved successfully!"})},error:o=>{console.error("Error fetching cheque:",o)},complete:()=>{console.log("Fetching cheque complete.")}})}deleteCheque(){if(!this.selectedBank?.id){this.messageService.add({severity:"warn",summary:"Warning",detail:"Please select a bank to delete a cheque."});return}this.confirmationService.confirm({message:"Are you sure you want to delete this cheque?",header:"Confirmation",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-success ml-2",rejectButtonStyleClass:"p-button-warning",accept:()=>{this.chequeService.deleteCheque(this.selectedBank?this.selectedBank.id:0).subscribe({next:o=>{this.messageService.add({severity:"success",summary:"Success",detail:o.message}),this.clear(),this.fetchBanks()},error:o=>{console.error("Error deleting cheque:",o),this.messageService.add({severity:"error",summary:"Error",detail:"Failed to delete cheque. Please try again later."})},complete:()=>{console.log("Delete cheque complete.")}})},reject:()=>{this.messageService.add({severity:"info",summary:"Cancelled",detail:"Cheque deletion cancelled"})}})}cmToPixels(o,s=96){return parseFloat((o*(s/2.54)).toFixed(2))}pixelsToCm(o,s=96){return parseFloat((o/s*2.54).toFixed(2))}saveOrUpdateCheque(){this.savedCheque?this.updateCheque():this.saveCheque()}updateCheque(){if(this.imageComponent&&this.savedCheque){let o={bankName:this.savedCheque.bankName,chequeName:this.savedCheque.chequeName,chequePath:this.savedCheque.chequePath,chequeWidth:this.chequeWidth,chequeHeight:this.chequeHeight,canvasWidth:Math.round(this.cmToPixels(this.chequeWidth)),canvasHeight:Math.round(this.cmToPixels(this.chequeHeight)),chequeConfigFront:this.imageComponent.exportJSON(),chequeConfigBack:this.imageComponent.exportBackJSON(),updatedUserId:0,updatedBy:"system",updatedDate:new Date};this.savedCheque.id&&this.chequeService.updateCheque(this.savedCheque.id,o).subscribe({next:s=>{this.saveChequeResponse=s,this.messageService.add({severity:"success",summary:"success",detail:"Cheque has been updated successfully!"}),this.fetchBanks()},error:s=>{console.error("Error Update Cheque:",s)},complete:()=>{console.log("Update Cheque complete.")}})}}saveCheque(){if(this.imageComponent){let o={bankName:this.selectedFileName,chequeName:this.fileUploadResponse.fileName,chequePath:this.fileUploadResponse.filePath,chequeWidth:this.chequeWidth,chequeHeight:this.chequeHeight,canvasWidth:Math.round(this.cmToPixels(this.chequeWidth)),canvasHeight:Math.round(this.cmToPixels(this.chequeHeight)),chequeConfigFront:this.imageComponent.exportJSON(),chequeConfigBack:this.imageComponent.exportBackJSON(),createdUserId:0,createdBy:"system",createdDate:new Date};this.chequeService.createCheque(o).subscribe({next:s=>{this.saveChequeResponse=s,this.messageService.add({severity:"success",summary:"success",detail:"A new cheque has been created successfully!"}),this.fetchBanks()},error:s=>{console.error("Error Save Cheque:",s)},complete:()=>{console.log("Save Cheque complete.")}})}}onFileSelectEdit(o){this.uploadFilePath="",this.selectedFileName=o.currentFiles[0].name.replace(/\.(jpg|jpeg)$/,""),this.chequeWidth=this.savedCheque.chequeWidth,this.chequeHeight=this.savedCheque.chequeHeight}onFileSelect(o){this.uploadFilePath="",this.selectedFileName=o.currentFiles[0].name.replace(/\.(jpg|jpeg)$/,""),this.getImageDimensions(o.currentFiles[0]).then(s=>{this.chequeWidth=this.pixelsToCm(s.width),this.chequeHeight=this.pixelsToCm(s.height)}).catch(s=>{console.log(s)})}beforeUploadEdit(o){o.formData.append("customFileName",this.savedCheque.bankName)}beforeUpload(o){o.formData.append("customFileName",this.selectedFileName)}getImageDimensions(o){return M(this,null,function*(){return new Promise((s,e)=>{let a=new FileReader;a.onload=i=>{let y=new Image;y.onload=()=>s({width:y.width,height:y.height}),y.onerror=()=>e(new Error("Error loading image")),i.target?.result&&(y.src=i.target.result)},a.onerror=()=>e(new Error("File could not be read")),a.readAsDataURL(o)})})}resizeBGImage(){this.isDisplayApplyBtn||this.imageComponent.loadBackgroundImage(this.cmToPixels(this.chequeWidth),this.cmToPixels(this.chequeHeight),this.imageURL)}resizeBGImageEdit(){this.selectedBank!=null&&this.imageComponent.resizeBackgroundImage(this.cmToPixels(this.chequeWidth),this.cmToPixels(this.chequeHeight))}clear(){this.imageComponent&&(this.chequeWidth=0,this.chequeHeight=0,this.selectedBankName="",this.selectedFileName="",this.selectedBank=null,this.selectedBank=null,this.uploadFilePath="",this.uploadFileFlag=!1,this.imageComponent.resetCanvas())}onFileClear(){!this.savedCheque&&!this.uploadFileFlag&&(this.chequeWidth=0,this.chequeHeight=0,this.selectedBankName="",this.selectedFileName="")}onTextObjectSelection(o){o?this.isTextNavigation=!0:this.isTextNavigation=!1}navigateToPrintMaster(){this.imageComponent&&this.imageComponent.disposeCanvas(),this.router.navigate(["/cheque-printing"])}static \u0275fac=function(s){return new(s||C)(x(te),x(H),x(O),x(D))};static \u0275cmp=F({type:C,selectors:[["app-settings"]],viewQuery:function(s,e){if(s&1&&N(k,5),s&2){let a;W(a=P())&&(e.imageComponent=a.first)}},standalone:!0,features:[U],decls:164,vars:106,consts:[["position","top"],[1,"grid","p-3","pb-2"],[1,"grid","flex","col-12","p-0"],[1,"col-2","py-0"],["src","icon/logo-3.png","alt","Image","width","230","height","330","styleClass"," border-round",1,""],[1,"col-12","p-0","md:col-10"],[3,"activeIndexChange"],["header","Add"],[1,"flex","border-1","border-round"],[1,"col-fixed"],[1,"field","grid"],["for","path",1,"font-bold","col-fixed",2,"width","80px"],[1,"col"],["type","text","pInputText","",3,"ngModelChange","ngModel","disabled"],["type","text","pInputText","",3,"ngModelChange","ngModel"],[1,"grid"],[1,"col","flex"],["inputId","minmaxfraction","mode","decimal",3,"ngModelChange","minFractionDigits","maxFractionDigits","ngModel"],[1,"field","grid","justify-content-end"],["label","Apply","size","small","severity","info",1,"ml-3",3,"onClick","raised","disabled"],["name","file","accept",".jpg","chooseStyleClass","p-ripple p-button-info p-button-raised p-button-text","uploadStyleClass","p-ripple p-button-success p-button-raised p-button-text","cancelStyleClass","p-ripple p-button-danger p-button-raised p-button-text","removeStyleClass","p-ripple p-button-danger p-button-raised p-button-text","chooseLabel","Add Image","uploadLabel","Upload Image",1,"mr-2",3,"onUpload","onBeforeUpload","onSelect","onClear","onRemove","url","multiple"],["header","Edit"],["for","bankName",1,"font-bold","col-fixed",2,"width","80px"],["optionLabel","bankName","filterBy","bankName","placeholder","Select a Bank","inputId","bankName",3,"ngModelChange","onChange","options","ngModel","filter","showClear","checkmark"],["name","file","accept",".jpg","chooseStyleClass","p-ripple p-button-info p-button-raised p-button-text","uploadStyleClass","p-ripple p-button-success p-button-raised p-button-text","cancelStyleClass","p-ripple p-button-danger p-button-raised p-button-text","removeStyleClass","p-ripple p-button-danger p-button-raised p-button-text","chooseLabel","Change Image","uploadLabel","Upload Image",1,"mr-2",3,"onUpload","onBeforeUpload","onSelect","onClear","onRemove","url","multiple","disabled"],["header","Delete"],[1,"col-fixed",2,"width","470px"],["inputId","minmaxfraction","mode","decimal",3,"ngModelChange","minFractionDigits","maxFractionDigits","ngModel","disabled"],[1,""],["severity","info",1,"mr-2",3,"onClick","text","raised"],[1,"flex","flex-column","align-items-center"],["src","icon/delete-cheque.png","alt","icon"],[1,"text-sm","mt-1"],["src","icon/cancel-cheque.png","alt","icon"],["severity","info",3,"onClick","text","raised"],[1,"pi","pi-print","text-4xl"],[1,"pt-2","col-12","p-0"],[1,"col-12","p-0"],[1,"flex"],[1,"col-fixed",2,"width","250px"],[1,"text-center","font-bold","mb-2"],[1,"remote-control","ios-style"],["icon","pi pi-arrow-up",1,"circle-btn","ios-btn",3,"onClick","disabled"],[1,"middle-row"],["icon","pi pi-arrow-left",1,"circle-btn","ios-btn",3,"onClick","disabled"],[1,"empty-space"],["icon","pi pi-arrow-right",1,"circle-btn","ios-btn",3,"onClick","disabled"],["icon","pi pi-arrow-down",1,"circle-btn","ios-btn",3,"onClick","disabled"],[1,"border-top-1","my-2"],[1,"flex","justify-content-around","align-items-center"],["icon","pi pi-search-minus","size","small",3,"onClick","rounded","outlined","disabled"],["icon","pi pi-search-plus","size","small",3,"onClick","rounded","outlined","disabled"],["icon","pi pi-minus-circle","size","small",3,"onClick","rounded","outlined","disabled"],["icon","pi pi-plus-circle","size","small",3,"onClick","rounded","outlined","disabled"],["class","flex justify-content-center align-items-center mt-3 mb-2",4,"ngIf"],[1,"mr-2",3,"objectSelected"],[4,"ngIf"],[1,"flex","justify-content-center","align-items-center","mt-3","mb-2"],["size","small",1,"mr-2",3,"onClick","text","raised","disabled"],[1,"fas","fa-bold"],[1,"fas","fa-italic"],["size","small",3,"onClick","text","raised","disabled"],[1,"fas","fa-underline"],["src","icon/save-cheque.png","alt","icon"]],template:function(s,e){s&1&&(m(0,"p-toast")(1,"p-confirmDialog",0),t(2,"div",1)(3,"div",2)(4,"div",3),m(5,"p-image",4),n(),t(6,"div",5)(7,"p-tabView",6),p("activeIndexChange",function(i){return e.activeIndexChange(i)}),t(8,"p-tabPanel",7)(9,"div",8)(10,"div",9)(11,"div",10)(12,"label",11),d(13,"Path:"),n(),t(14,"div",12)(15,"input",13),g("ngModelChange",function(i){return h(e.uploadFilePath,i)||(e.uploadFilePath=i),i}),n()()(),t(16,"div",10)(17,"label",11),d(18,"Name:"),n(),t(19,"div",12)(20,"input",14),g("ngModelChange",function(i){return h(e.selectedFileName,i)||(e.selectedFileName=i),i}),n()()(),t(21,"div",15)(22,"label",11),d(23,"Size:"),n(),t(24,"div",16)(25,"div")(26,"div",10)(27,"label",11),d(28,"Width:"),n(),t(29,"div",12)(30,"p-inputGroup")(31,"p-inputNumber",17),g("ngModelChange",function(i){return h(e.chequeWidth,i)||(e.chequeWidth=i),i}),n(),t(32,"p-inputGroupAddon"),d(33,"cm"),n()()()(),t(34,"div",10)(35,"label",11),d(36,"Height:"),n(),t(37,"div",12)(38,"p-inputGroup")(39,"p-inputNumber",17),g("ngModelChange",function(i){return h(e.chequeHeight,i)||(e.chequeHeight=i),i}),n(),t(40,"p-inputGroupAddon"),d(41,"cm"),n()()()()(),t(42,"div",18)(43,"p-button",19),p("onClick",function(){return e.resizeBGImage()}),n()()()()(),t(44,"div",16)(45,"p-fileUpload",20),p("onUpload",function(i){return e.onUpload(i)})("onBeforeUpload",function(i){return e.beforeUpload(i)})("onSelect",function(i){return e.onFileSelect(i)})("onClear",function(){return e.onFileClear()})("onRemove",function(){return e.onFileClear()}),n()()()(),t(46,"p-tabPanel",21)(47,"div",8)(48,"div",9)(49,"div",10)(50,"label",22),d(51,"Bank:"),n(),t(52,"div",12)(53,"p-dropdown",23),g("ngModelChange",function(i){return h(e.selectedBank,i)||(e.selectedBank=i),i}),p("onChange",function(){return e.fetchCheque()}),n()()(),t(54,"div",10)(55,"label",11),d(56,"Name:"),n(),t(57,"div",12)(58,"input",13),g("ngModelChange",function(i){return h(e.selectedBankName,i)||(e.selectedBankName=i),i}),n()()(),t(59,"div",15)(60,"label",11),d(61,"Size:"),n(),t(62,"div",16)(63,"div")(64,"div",10)(65,"label",11),d(66,"Width:"),n(),t(67,"div",12)(68,"p-inputGroup")(69,"p-inputNumber",17),g("ngModelChange",function(i){return h(e.chequeWidth,i)||(e.chequeWidth=i),i}),n(),t(70,"p-inputGroupAddon"),d(71,"cm"),n()()()(),t(72,"div",10)(73,"label",11),d(74,"Height:"),n(),t(75,"div",12)(76,"p-inputGroup")(77,"p-inputNumber",17),g("ngModelChange",function(i){return h(e.chequeHeight,i)||(e.chequeHeight=i),i}),n(),t(78,"p-inputGroupAddon"),d(79,"cm"),n()()()()(),t(80,"div",18)(81,"p-button",19),p("onClick",function(){return e.resizeBGImageEdit()}),n()()()()(),t(82,"div",16)(83,"p-fileUpload",24),p("onUpload",function(i){return e.onUpload(i)})("onBeforeUpload",function(i){return e.beforeUploadEdit(i)})("onSelect",function(i){return e.onFileSelectEdit(i)})("onClear",function(){return e.onFileClear()})("onRemove",function(){return e.onFileClear()}),n()()()(),t(84,"p-tabPanel",25)(85,"div",8)(86,"div",26)(87,"div",10)(88,"label",11),d(89,"Bank:"),n(),t(90,"div",12)(91,"p-dropdown",23),g("ngModelChange",function(i){return h(e.selectedBank,i)||(e.selectedBank=i),i}),p("onChange",function(){return e.fetchCheque()}),n()()(),t(92,"div",10)(93,"label",11),d(94,"Name:"),n(),t(95,"div",12)(96,"input",13),g("ngModelChange",function(i){return h(e.selectedBankName,i)||(e.selectedBankName=i),i}),n()()(),t(97,"div",15)(98,"label",11),d(99,"Size:"),n(),t(100,"div",12)(101,"div",10)(102,"label",11),d(103,"Width:"),n(),t(104,"div",12)(105,"p-inputGroup")(106,"p-inputNumber",27),g("ngModelChange",function(i){return h(e.chequeWidth,i)||(e.chequeWidth=i),i}),n(),t(107,"p-inputGroupAddon"),d(108,"cm"),n()()()(),t(109,"div",10)(110,"label",11),d(111,"Height:"),n(),t(112,"div",12)(113,"p-inputGroup")(114,"p-inputNumber",27),g("ngModelChange",function(i){return h(e.chequeHeight,i)||(e.chequeHeight=i),i}),n(),t(115,"p-inputGroupAddon"),d(116,"cm"),n()()()()()()(),t(117,"div",16)(118,"div",28)(119,"p-button",29),p("onClick",function(){return e.deleteCheque()}),t(120,"div",30),m(121,"img",31),t(122,"span",32),d(123,"Delete"),n()()(),t(124,"p-button",29),p("onClick",function(){return e.clear()}),t(125,"div",30),m(126,"img",33),t(127,"span",32),d(128,"Cancel"),n()()(),t(129,"p-button",34),p("onClick",function(){return e.navigateToPrintMaster()}),t(130,"div",30),m(131,"i",35),t(132,"span",32),d(133," Go to Print"),n()()()()()()()()()(),t(134,"div",36)(135,"p-card",37)(136,"div",38)(137,"div",39)(138,"p-card")(139,"div",40),d(140,"Postion"),n(),t(141,"div",41)(142,"p-button",42),p("onClick",function(){return e.moveText("up")}),n(),t(143,"div",43)(144,"p-button",44),p("onClick",function(){return e.moveText("left")}),n(),m(145,"div",45),t(146,"p-button",46),p("onClick",function(){return e.moveText("right")}),n()(),t(147,"p-button",47),p("onClick",function(){return e.moveText("down")}),n()(),m(148,"div",48),t(149,"div",40),d(150,"Box Size"),n(),t(151,"div",49)(152,"p-button",50),p("onClick",function(){return e.decreaseTextboxWidth()}),n(),t(153,"p-button",51),p("onClick",function(){return e.increaseTextboxWidth()}),n()(),m(154,"div",48),t(155,"div",40),d(156,"Text Size"),n(),t(157,"div",49)(158,"p-button",52),p("onClick",function(){return e.decreaseFontSize()}),n(),t(159,"p-button",53),p("onClick",function(){return e.increaseFontSize()}),n()(),w(160,le,7,9,"div",54),n()(),t(161,"div",16)(162,"app-image-manipulation",55),p("objectSelected",function(i){return e.onTextObjectSelection(i)}),n(),w(163,se,16,6,"ng-container",56),n()()()()()),s&2&&(r(15),u(_(94,S)),c("ngModel",e.uploadFilePath),l("disabled",!0),r(5),u(_(95,S)),c("ngModel",e.selectedFileName),r(10),u(_(96,q)),r(),l("minFractionDigits",2)("maxFractionDigits",5),c("ngModel",e.chequeWidth),r(7),u(_(97,q)),r(),l("minFractionDigits",2)("maxFractionDigits",5),c("ngModel",e.chequeHeight),r(4),l("raised",!0)("disabled",e.isDisplayApplyBtn),r(2),l("url",e.uploadFileURL)("multiple",!1),r(8),u(_(98,S)),l("options",e.banks),c("ngModel",e.selectedBank),l("filter",!0)("showClear",!0)("checkmark",!0),r(5),u(_(99,S)),c("ngModel",e.selectedBankName),l("disabled",e.selectedBank!=null),r(10),u(_(100,q)),r(),l("minFractionDigits",2)("maxFractionDigits",5),c("ngModel",e.chequeWidth),r(7),u(_(101,q)),r(),l("minFractionDigits",2)("maxFractionDigits",5),c("ngModel",e.chequeHeight),r(4),l("raised",!0)("disabled",e.selectedBank==null),r(2),l("url",e.uploadFileURL)("multiple",!1)("disabled",e.selectedBank==null),r(8),u(_(102,S)),l("options",e.banks),c("ngModel",e.selectedBank),l("filter",!0)("showClear",!0)("checkmark",!0),r(5),u(_(103,S)),c("ngModel",e.selectedBankName),l("disabled",!0),r(9),u(_(104,ae)),r(),l("minFractionDigits",2)("maxFractionDigits",5),c("ngModel",e.chequeWidth),l("disabled",!0),r(7),u(_(105,ae)),r(),l("minFractionDigits",2)("maxFractionDigits",5),c("ngModel",e.chequeHeight),l("disabled",!0),r(5),l("text",!0)("raised",!0),r(5),l("text",!0)("raised",!0),r(5),l("text",!0)("raised",!0),r(13),l("disabled",!e.isTextNavigation),r(2),l("disabled",!e.isTextNavigation),r(2),l("disabled",!e.isTextNavigation),r(),l("disabled",!e.isTextNavigation),r(5),l("rounded",!0)("outlined",!0)("disabled",!e.isTextNavigation),r(),l("rounded",!0)("outlined",!0)("disabled",!e.isTextNavigation),r(5),l("rounded",!0)("outlined",!0)("disabled",!e.isTextNavigation),r(),l("rounded",!0)("outlined",!0)("disabled",!e.isTextNavigation),r(),l("ngIf",!1),r(3),l("ngIf",e.isSaveCancelButtonShow))},dependencies:[oe,R,A,z,L,j,G,J,V,K,X,Q,Y,Z,$,k,I,ie,ne],styles:["[_nghost-%COMP%]     .remote-control{display:flex;flex-direction:column;align-items:center;justify-content:center}[_nghost-%COMP%]     .middle-row{display:flex;justify-content:center;align-items:center;gap:10px}[_nghost-%COMP%]     .ios-btn .p-button{width:40px;height:40px;border-radius:50%;padding:0;background:linear-gradient(145deg,#f2f2f2,#e0e0e0);box-shadow:0 4px 6px #0000001a,0 1px 3px #00000014;transition:box-shadow .2s ease,transform .2s ease}[_nghost-%COMP%]     .ios-btn .p-button:hover{transform:scale(1.05);box-shadow:0 8px 12px #0003}[_nghost-%COMP%]     .ios-btn .p-button:active{background:linear-gradient(145deg,#e0e0e0,#d0d0d0)}[_nghost-%COMP%]     .ios-btn .p-button-icon{font-size:15px;color:#333}[_nghost-%COMP%]     .empty-space{width:10px;height:10px;visibility:hidden}[_nghost-%COMP%]     .p-card .p-card-body{padding:.5rem}[_nghost-%COMP%]     .p-card .p-card-content{padding:0}[_nghost-%COMP%]     .p-slider .p-slider-handle{height:20px;width:20px;background:#e2e8f0;border:0 none;border-radius:50%;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s,outline-color .2s}[_nghost-%COMP%]     .custom-icon{position:absolute;margin-top:13px;font-size:10px}[_nghost-%COMP%]     button.p-ripple.p-element.p-button.p-component.p-button-icon-only.p-button-rounded.p-button-outlined.p-button-sm{height:2rem;width:2rem}[_nghost-%COMP%]     .p-inputtext{padding:.4rem}[_nghost-%COMP%]     .p-tabview .p-tabview-nav li .p-tabview-nav-link{padding:.75rem}[_nghost-%COMP%]     .p-button.p-button-sm{font-size:.775rem;padding:.35rem .5rem}[_nghost-%COMP%]     .p-inputtext:disabled{opacity:1;background-color:#f9fafb;color:#64748b}.custom-icon-pen[_ngcontent-%COMP%]{position:absolute;width:35px;height:35px}[_nghost-%COMP%]     .p-inputgroup>.p-inputwrapper>.p-inputnumber>.p-inputnumber-input{border-radius:0;margin:0}[_nghost-%COMP%]     span.border-round.p-image.p-component img{border-radius:10px}[_nghost-%COMP%]     .p-toast{width:auto}[_nghost-%COMP%]     .p-inputtext:disabled{opacity:.5;background-color:#e2e8f0;color:#64748b}"]})}return C})();export{We as SettingsComponent};