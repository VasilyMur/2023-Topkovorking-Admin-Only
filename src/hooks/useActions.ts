import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreatorsMapObject } from "@reduxjs/toolkit";
import { AppThunkAction } from "../store";
import actionCreators from '../store/rootActionCreators';

/**
 * Получение набора функций actionCreator'ов.
 * @param selector Фукция-селектор actionCreator'ов.
 */
export default function useActions<TSelected extends ActionCreatorsMapObject<AppThunkAction>>(
    selector: (actions: typeof actionCreators) => TSelected
): TSelected {
    const dispatch = useDispatch();

    const bindedActions = useMemo(() =>
        bindActionCreators(selector(actionCreators), dispatch),
        []
    );

    return bindedActions;
}