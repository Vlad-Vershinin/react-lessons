import { Routes, Route } from 'react-router';

import BasisIntro from './exercises/001-BasisIntro/001-BasisIntro';
import BasisInstall from './exercises/002-BasisInstall/002-BasisInstall';
import BasisDevtools from './exercises/003-BasisDevtools/003-BasisDevtools';
import BasisComponentWay from './exercises/004-BasisComponentWay/004-BasisComponentWay';
import BasisSiteLayout from './exercises/005-BasisSiteLayout/005-BasisSiteLayout';
import BasisComponentResult from './exercises/006-BasisComponentResult/006-BasisComponentResult';
import JsxIntro from './exercises/007-JsxIntro/007-JsxIntro';
import JsxReturningNested from './exercises/008-JsxReturningNested/008-JsxReturningNested';
import JsxReturningDown from './exercises/009-JsxReturningDown/009-JsxReturningDown';
import JsxReturningSeveral from './exercises/010-JsxReturningSeveral/010-JsxReturningSeveral';
import JsxReturningUnclosed from './exercises/011-JsxReturningUnclosed/011-JsxReturningUnclosed';
import JsxReturningEmpty from './exercises/012-JsxReturningEmpty/012-JsxReturningEmpty';
import JsxVariablesInserting from './exercises/013-JsxVariablesInserting/013-JsxVariablesInserting';
import JsxVariablesNuances from './exercises/014-JsxVariablesNuances/014-JsxVariablesNuances';
import JsxVariablesArrays from './exercises/015-JsxVariablesArrays/015-JsxVariablesArrays';
import JsxVariablesObjects from './exercises/016-JsxVariablesObjects/016-JsxVariablesObjects';
import JsxVariablesAttributes from './exercises/017-JsxVariablesAttributes/017-JsxVariablesAttributes';
import JsxTagsIntro from './exercises/018-JsxTagsIntro/018-JsxTagsIntro';
import JsxTagsSeveral from './exercises/019-JsxTagsSeveral/019-JsxTagsSeveral';
import JsxTagsMultiLine from './exercises/020-JsxTagsMultiLine/020-JsxTagsMultiLine';
import JsxTagsReturn from './exercises/021-JsxTagsReturn/021-JsxTagsReturn';
import JsxTagsClosing from './exercises/022-JsxTagsClosing/022-JsxTagsClosing';
import JsxTagsCorrectness from './exercises/023-JsxTagsCorrectness/023-JsxTagsCorrectness';
import JsxRunningCode from './exercises/024-JsxRunningCode/024-JsxRunningCode';
import ConditionsIntro from './exercises/025-ConditionsIntro/025-ConditionsIntro';
import ConditionsShow from './exercises/026-ConditionsShow/026-ConditionsShow';
import ConditionsReturn from './exercises/027-ConditionsReturn/027-ConditionsReturn';
import ConditionsTernary from './exercises/028-ConditionsTernary/028-ConditionsTernary';
import ConditionsLogicalAnd from './exercises/029-ConditionsLogicalAnd/029-ConditionsLogicalAnd';
import ConditionsInverting from './exercises/030-ConditionsInverting/030-ConditionsInverting';
import FunctionsIntro from './exercises/031-FunctionsIntro/031-FunctionsIntro';
import FunctionsTagsCalling from './exercises/032-FunctionsTagsCalling/032-FunctionsTagsCalling';
import FunctionsHandlers from './exercises/033-FunctionsHandlers/033-FunctionsHandlers';
import FunctionsHandlersParams from './exercises/034-FunctionsHandlersParams/034-FunctionsHandlersParams';
import FunctionsEventObject from './exercises/035-FunctionsEventObject/035-FunctionsEventObject';
import FunctionsEventObjectParams from './exercises/036-FunctionsEventObjectParams/036-FunctionsEventObjectParams';
import FormingTagsArray from './exercises/037-FormingTagsArray/037-FormingTagsArray';
import FormingLoopTagsArray from './exercises/038-FormingLoopTagsArray/038-FormingLoopTagsArray';
import FormingTagsArrayData from './exercises/039-FormingTagsArrayData/039-FormingTagsArrayData';
import FormingArrayKeys from './exercises/040-FormingArrayKeys/040-FormingArrayKeys';
import FormingArrayOfObjects from './exercises/041-FormingArrayOfObjects/041-FormingArrayOfObjects';
import FormingUniqueKeysId from './exercises/042-FormingUniqueKeysId/042-FormingUniqueKeysId';
import FormingTable from './exercises/043-FormingTable/043-FormingTable';
import IdIntro from './exercises/044-IdIntro/044-IdIntro';
import IdProblem from './exercises/045-IdProblem/045-IdProblem';
import IdRandomStrings from './exercises/046-IdRandomStrings/046-IdRandomStrings';
import IdGeneration from './exercises/047-IdGeneration/047-IdGeneration';
import IdFunction from './exercises/048-IdFunction/048-IdFunction';
import IdFunctionUsing from './exercises/049-IdFunctionUsing/049-IdFunctionUsing';
import IdFunctionWrongUsing from './exercises/050-IdFunctionWrongUsing/050-IdFunctionWrongUsing';
import StatesIntro from './exercises/051-StatesIntro/051-StatesIntro';
import StatesUsing from './exercises/052-StatesUsing/052-StatesUsing';
import StatesReactivity from './exercises/053-StatesReactivity/053-StatesReactivity';
import StatesBooleanValue from './exercises/054-StatesBooleanValue/054-StatesBooleanValue';
import StatesCounter from './exercises/055-StatesCounter/055-StatesCounter';
import FormsInputIntro from './exercises/056-FormsInputIntro/056-FormsInputIntro';
import FormsInputOutput from './exercises/057-FormsInputOutput/057-FormsInputOutput';
import FormsInputFunction from './exercises/058-FormsInputFunction/058-FormsInputFunction';
import FormsInputSeveral from './exercises/059-FormsInputSeveral/059-FormsInputSeveral';
import FormsData from './exercises/060-FormsData/060-FormsData';
import FormsTextarea from './exercises/061-FormsTextarea/061-FormsTextarea';
import FormsCheckboxIntro from './exercises/062-FormsCheckboxIntro/062-FormsCheckboxIntro';
import FormsCheckboxConditionalRendering from './exercises/063-FormsCheckboxConditionalRendering/063-FormsCheckboxConditionalRendering';
import FormsSelectIntro from './exercises/064-FormsSelectIntro/064-FormsSelectIntro';
import FormsSelectArray from './exercises/065-FormsSelectArray/065-FormsSelectArray';
import FormsSelectValue from './exercises/066-FormsSelectValue/066-FormsSelectValue';
import FormsSelectArrayValue from './exercises/067-FormsSelectArrayValue/067-FormsSelectArrayValue';
import FormsRadio from './exercises/068-FormsRadio/068-FormsRadio';
import FormsDefaultValues from './exercises/069-FormsDefaultValues/069-FormsDefaultValues';
import FormsArrayInputsBinding from './exercises/070-FormsArrayInputsBinding/070-FormsArrayInputsBinding';
import FormsObjectInputsBinding from './exercises/071-FormsObjectInputsBinding/071-FormsObjectInputsBinding';
import DataIntro from './exercises/072-DataIntro/072-DataIntro';
import DataArrayAdding from './exercises/073-DataArrayAdding/073-DataArrayAdding';
import DataArrayOperations from './exercises/074-DataArrayOperations/074-DataArrayOperations';
import DataObjectsArrayAdding from './exercises/075-DataObjectsArrayAdding/075-DataObjectsArrayAdding';
import DataObjectsArrayOperations from './exercises/076-DataObjectsArrayOperations/076-DataObjectsArrayOperations';
import DataShowing from './exercises/077-DataShowing/077-DataShowing';
import ComponentsIntro from './exercises/078-ComponentsIntro/078-ComponentsIntro';
import ComponentsUsing from './exercises/079-ComponentsUsing/079-ComponentsUsing';
import ComponentsMultipleInstances from './exercises/080-ComponentsMultipleInstances/080-ComponentsMultipleInstances';
import ComponentsProps from './exercises/081-ComponentsProps/081-ComponentsProps';
import ComponentsChild from './exercises/082-ComponentsChild/082-ComponentsChild';
import ComponentsChildArray from './exercises/083-ComponentsChildArray/083-ComponentsChildArray';
import ComponentsChildLoop from './exercises/084-ComponentsChildLoop/084-ComponentsChildLoop';
import ComponentsPassingStates from './exercises/085-ComponentsPassingStates/085-ComponentsPassingStates';
import ComponentsPassingId from './exercises/086-ComponentsPassingId/086-ComponentsPassingId';
import ComponentsChangingParentState from './exercises/087-ComponentsChangingParentState/087-ComponentsChangingParentState';
import ComponentsEditingParentState from './exercises/088-ComponentsEditingParentState/088-ComponentsEditingParentState';
import ComponentsEditingGrandparentState from './exercises/089-ComponentsEditingGrandparentState/089-ComponentsEditingGrandparentState';
import ComponentsModesViaStates from './exercises/090-ComponentsModesViaStates/090-ComponentsModesViaStates';
import ConceptsIntro from './exercises/091-ConceptsIntro/091-ConceptsIntro';
import ConceptsData from './exercises/092-ConceptsData/092-ConceptsData';
import ConceptsComponentsTypes from './exercises/093-ConceptsComponentsTypes/093-ConceptsComponentsTypes';
import ConceptsDataFlow from './exercises/094-ConceptsDataFlow/094-ConceptsDataFlow';
import ConceptsLiftingStateUp from './exercises/095-ConceptsLiftingStateUp/095-ConceptsLiftingStateUp';
import ConceptsTruthOneSource from './exercises/096-ConceptsTruthOneSource/096-ConceptsTruthOneSource';
import StylingIntro from './exercises/097-StylingIntro/097-StylingIntro';
import StylingGlobalCss from './exercises/098-StylingGlobalCss/098-StylingGlobalCss';
import StylingObjectToStyle from './exercises/099-StylingObjectToStyle/099-StylingObjectToStyle';
import StylingCommonFileToStyle from './exercises/100-StylingCommonFileToStyle/100-StylingCommonFileToStyle';
import StylingStylesInStyle from './exercises/101-StylingStylesInStyle/101-StylingStylesInStyle';
import StylingVariablesToStyle from './exercises/102-StylingVariablesToStyle/102-StylingVariablesToStyle';
import StylingStyledComponents from './exercises/103-StylingStyledComponents/103-StylingStyledComponents';
import StylingStyledComponentsProps from './exercises/104-StylingStyledComponentsProps/104-StylingStyledComponentsProps';
import StylingStyledComponentsConditional from './exercises/105-StylingStyledComponentsConditional/105-StylingStyledComponentsConditional';
import StylingStyledComponentsExtending from './exercises/106-StylingStyledComponentsExtending/106-StylingStyledComponentsExtending';
import StylingCssModulesStart from './exercises/107-StylingCssModulesStart/107-StylingCssModulesStart';
import StylingCssModulesFinish from './exercises/108-StylingCssModulesFinish/108-StylingCssModulesFinish';
import StylingCssModulesComposesStyles from './exercises/109-StylingCssModulesComposesStyles/109-StylingCssModulesComposesStyles';
import StylingCssModulesComposesFiles from './exercises/110-StylingCssModulesComposesFiles/110-StylingCssModulesComposesFiles';
import ProjectChecklist from './exercises/111-ProjectChecklist/111-ProjectChecklist';
import ProjectNotepad from './exercises/112-ProjectNotepad/112-ProjectNotepad';

function PathsList() {
  return (
    <Routes>
      <Route path={'/basis/intro'} element={<BasisIntro />} />
      <Route path={'/basis/install'} element={<BasisInstall />} />
      <Route path={'/basis/devtools'} element={<BasisDevtools />} />
      <Route path={'/basis/component-way'} element={<BasisComponentWay />} />
      <Route path={'/basis/site-layout'} element={<BasisSiteLayout />} />
      <Route path={'/basis/component-result'} element={<BasisComponentResult />} />
      <Route path={'/jsx/intro'} element={<JsxIntro />} />
      <Route path={'/jsx/returning/nested'} element={<JsxReturningNested />} />
      <Route path={'/jsx/returning/down'} element={<JsxReturningDown />} />
      <Route path={'/jsx/returning/several'} element={<JsxReturningSeveral />} />
      <Route path={'/jsx/returning/unclosed'} element={<JsxReturningUnclosed />} />
      <Route path={'/jsx/returning/empty'} element={<JsxReturningEmpty />} />
      <Route path={'/jsx/variables/inserting'} element={<JsxVariablesInserting />} />
      <Route path={'/jsx/variables/nuances'} element={<JsxVariablesNuances />} />
      <Route path={'/jsx/variables/arrays'} element={<JsxVariablesArrays />} />
      <Route path={'/jsx/variables/objects'} element={<JsxVariablesObjects />} />
      <Route path={'/jsx/variables/attributes'} element={<JsxVariablesAttributes />} />
      <Route path={'/jsx/tags/intro'} element={<JsxTagsIntro />} />
      <Route path={'/jsx/tags/several'} element={<JsxTagsSeveral />} />
      <Route path={'/jsx/tags/multi-line'} element={<JsxTagsMultiLine />} />
      <Route path={'/jsx/tags/return'} element={<JsxTagsReturn />} />
      <Route path={'/jsx/tags/closing'} element={<JsxTagsClosing />} />
      <Route path={'/jsx/tags/correctness'} element={<JsxTagsCorrectness />} />
      <Route path={'/jsx/running-code'} element={<JsxRunningCode />} />
      <Route path={'/conditions/intro'} element={<ConditionsIntro />} />
      <Route path={'/conditions/show'} element={<ConditionsShow />} />
      <Route path={'/conditions/return'} element={<ConditionsReturn />} />
      <Route path={'/conditions/ternary'} element={<ConditionsTernary />} />
      <Route path={'/conditions/logical-and'} element={<ConditionsLogicalAnd />} />
      <Route path={'/conditions/inverting'} element={<ConditionsInverting />} />
      <Route path={'/functions/intro'} element={<FunctionsIntro />} />
      <Route path={'/functions/tags-calling'} element={<FunctionsTagsCalling />} />
      <Route path={'/functions/handlers'} element={<FunctionsHandlers />} />
      <Route path={'/functions/handlers-params'} element={<FunctionsHandlersParams />} />
      <Route path={'/functions/event-object'} element={<FunctionsEventObject />} />
      <Route path={'/functions/event-object-params'} element={<FunctionsEventObjectParams />} />
      <Route path={'/forming/tags-array'} element={<FormingTagsArray />} />
      <Route path={'/forming/loop-tags-array'} element={<FormingLoopTagsArray />} />
      <Route path={'/forming/tags-array-data'} element={<FormingTagsArrayData />} />
      <Route path={'/forming/array-keys'} element={<FormingArrayKeys />} />
      <Route path={'/forming/array-of-objects'} element={<FormingArrayOfObjects />} />
      <Route path={'/forming/unique-keys-id'} element={<FormingUniqueKeysId />} />
      <Route path={'/forming/table'} element={<FormingTable />} />
      <Route path={'/id/intro'} element={<IdIntro />} />
      <Route path={'/id/problem'} element={<IdProblem />} />
      <Route path={'/id/random-strings'} element={<IdRandomStrings />} />
      <Route path={'/id/generation'} element={<IdGeneration />} />
      <Route path={'/id/function'} element={<IdFunction />} />
      <Route path={'/id/function-using'} element={<IdFunctionUsing />} />
      <Route path={'/id/function-wrong-using'} element={<IdFunctionWrongUsing />} />
      <Route path={'/states/intro'} element={<StatesIntro />} />
      <Route path={'/states/using'} element={<StatesUsing />} />
      <Route path={'/states/reactivity'} element={<StatesReactivity />} />
      <Route path={'/states/boolean-value'} element={<StatesBooleanValue />} />
      <Route path={'/states/counter'} element={<StatesCounter />} />
      <Route path={'/forms/input/intro'} element={<FormsInputIntro />} />
      <Route path={'/forms/input/output'} element={<FormsInputOutput />} />
      <Route path={'/forms/input/function'} element={<FormsInputFunction />} />
      <Route path={'/forms/input/several'} element={<FormsInputSeveral />} />
      <Route path={'/forms/data'} element={<FormsData />} />
      <Route path={'/forms/textarea'} element={<FormsTextarea />} />
      <Route path={'/forms/checkbox/intro'} element={<FormsCheckboxIntro />} />
      <Route path={'/forms/checkbox/conditional-rendering'} element={<FormsCheckboxConditionalRendering />} />
      <Route path={'/forms/select/intro'} element={<FormsSelectIntro />} />
      <Route path={'/forms/select/array'} element={<FormsSelectArray />} />
      <Route path={'/forms/select/value'} element={<FormsSelectValue />} />
      <Route path={'/forms/select/array-value'} element={<FormsSelectArrayValue />} />
      <Route path={'/forms/radio'} element={<FormsRadio />} />
      <Route path={'/forms/default-values'} element={<FormsDefaultValues />} />
      <Route path={'/forms/array-inputs-binding'} element={<FormsArrayInputsBinding />} />
      <Route path={'/forms/object-inputs-binding'} element={<FormsObjectInputsBinding />} />
      <Route path={'/data/intro'} element={<DataIntro />} />
      <Route path={'/data/array-adding'} element={<DataArrayAdding />} />
      <Route path={'/data/array-operations'} element={<DataArrayOperations />} />
      <Route path={'/data/objects-array-adding'} element={<DataObjectsArrayAdding />} />
      <Route path={'/data/objects-array-operations'} element={<DataObjectsArrayOperations />} />
      <Route path={'/data/showing'} element={<DataShowing />} />
      <Route path={'/components/intro'} element={<ComponentsIntro />} />
      <Route path={'/components/using'} element={<ComponentsUsing />} />
      <Route path={'/components/multiple-instances'} element={<ComponentsMultipleInstances />} />
      <Route path={'/components/props'} element={<ComponentsProps />} />
      <Route path={'/components/child'} element={<ComponentsChild />} />
      <Route path={'/components/child-array'} element={<ComponentsChildArray />} />
      <Route path={'/components/child-loop'} element={<ComponentsChildLoop />} />
      <Route path={'/components/passing-states'} element={<ComponentsPassingStates />} />
      <Route path={'/components/passing-id'} element={<ComponentsPassingId />} />
      <Route path={'/components/changing-parent-state'} element={<ComponentsChangingParentState />} />
      <Route path={'/components/editing-parent-state'} element={<ComponentsEditingParentState />} />
      <Route path={'/components/editing-grandparent-state'} element={<ComponentsEditingGrandparentState />} />
      <Route path={'/components/modes-via-states'} element={<ComponentsModesViaStates />} />
      <Route path={'/concepts/intro'} element={<ConceptsIntro />} />
      <Route path={'/concepts/data'} element={<ConceptsData />} />
      <Route path={'/concepts/components-types'} element={<ConceptsComponentsTypes />} />
      <Route path={'/concepts/data-flow'} element={<ConceptsDataFlow />} />
      <Route path={'/concepts/lifting-state-up'} element={<ConceptsLiftingStateUp />} />
      <Route path={'/concepts/truth-one-source'} element={<ConceptsTruthOneSource />} />
      <Route path={'/styling/intro'} element={<StylingIntro />} />
      <Route path={'/styling/global-css'} element={<StylingGlobalCss />} />
      <Route path={'/styling/object-to-style'} element={<StylingObjectToStyle />} />
      <Route path={'/styling/common-file-to-style'} element={<StylingCommonFileToStyle />} />
      <Route path={'/styling/styles-in-style'} element={<StylingStylesInStyle />} />
      <Route path={'/styling/variables-to-style'} element={<StylingVariablesToStyle />} />
      <Route path={'/styling/styled-components'} element={<StylingStyledComponents />} />
      <Route path={'/styling/styled-components-props'} element={<StylingStyledComponentsProps />} />
      <Route path={'/styling/styled-components-conditional'} element={<StylingStyledComponentsConditional />} />
      <Route path={'/styling/styled-components-extending'} element={<StylingStyledComponentsExtending />} />
      <Route path={'/styling/css-modules-start'} element={<StylingCssModulesStart />} />
      <Route path={'/styling/css-modules-finish'} element={<StylingCssModulesFinish />} />
      <Route path={'/styling/css-modules-composes-styles'} element={<StylingCssModulesComposesStyles />} />
      <Route path={'/styling/css-modules-composes-files'} element={<StylingCssModulesComposesFiles />} />
      <Route path={'/project/checklist'} element={<ProjectChecklist />} />
      <Route path={'/project/notepad'} element={<ProjectNotepad />} />
    </Routes>
  );
}

export default PathsList;