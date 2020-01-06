export interface SmartTable {
    title: string;
    type: string;
    class: string;
    width: string;
    isSortable: boolean;
    isEditable: boolean;
    isAddable: boolean;
    isFilterable: boolean;
    sortDirection: string;
    defaultSortDirection: string;
    editor: { type: string, config: any, component: any };
    filter: { type: string, config: any, component: any };
    renderComponent: any;
    compareFunction: () => any;
    valuePrepareFunction: () => any;
    filterFunction: () => any;
    onComponentInitFunction: () => any;
}