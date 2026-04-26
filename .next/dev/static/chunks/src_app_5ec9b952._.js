(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function Card(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "7bd87d1a621098ac89183ac2d12b30baa10fc4f945645ddd3597e62386d924b7") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7bd87d1a621098ac89183ac2d12b30baa10fc4f945645ddd3597e62386d924b7";
    }
    const { label, value, onAdd } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "label",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/components/card.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = value.toLocaleString("sv-SE");
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "value",
            children: [
                t2,
                " SEK"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/card.jsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== onAdd) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn",
            onClick: onAdd,
            children: "+"
        }, void 0, false, {
            fileName: "[project]/src/app/components/card.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[7] = onAdd;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "row",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/card.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t1 || $[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                t1,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/card.jsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[12] = t1;
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    return t6;
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/AddExpenseModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddExpensesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ExpenseContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ExpenseContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AddExpensesModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "e40f0ce10a078819c7c45074e0477492f65095d5a4c0b7ebf134f62b22a70531") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e40f0ce10a078819c7c45074e0477492f65095d5a4c0b7ebf134f62b22a70531";
    }
    const { onClose } = t0;
    const { addExpense } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ExpenseContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            description: "",
            amount: "",
            category: "Shopping"
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] !== form) {
        t3 = ({
            "AddExpensesModal[handleChange]": (e)=>{
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                });
            }
        })["AddExpensesModal[handleChange]"];
        $[3] = form;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleChange = t3;
    let t4;
    if ($[5] !== addExpense || $[6] !== form || $[7] !== onClose) {
        t4 = ({
            "AddExpensesModal[handleSubmit]": (e_0)=>{
                e_0.preventDefault();
                const newErrors = {};
                if (!form.description) {
                    newErrors.description = "V\xE4nligen fyll i beskrivning";
                }
                if (!form.amount) {
                    newErrors.amount = "V\xE4nligen fyll i belopp";
                }
                if (Object.keys(newErrors).length > 0) {
                    setError(newErrors);
                    return;
                }
                addExpense({
                    id: Date.now(),
                    ...form,
                    amount: Number(form.amount),
                    date: new Date().toISOString()
                });
                onClose();
            }
        })["AddExpensesModal[handleSubmit]"];
        $[5] = addExpense;
        $[6] = form;
        $[7] = onClose;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleSubmit = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            {
                key: "Mat",
                icon: "\uD83C\uDF54"
            },
            {
                key: "Hem",
                icon: "\uD83C\uDFE0"
            },
            {
                key: "N\xF6je",
                icon: "\uD83C\uDFAE"
            },
            {
                key: "Transport",
                icon: "\uD83D\uDE97"
            },
            {
                key: "Shopping",
                icon: "\uD83D\uDECD\uFE0F"
            },
            {
                key: "\xD6vrigt",
                icon: "\uD83D\uDCE6"
            }
        ];
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const categories = t5;
    let t6;
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            children: "Lägg till utgift!"
        }, void 0, false, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t7;
    } else {
        t6 = $[10];
        t7 = $[11];
    }
    let t8;
    if ($[12] !== handleChange) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            name: "description",
            placeholder: "Beskrivning",
            onChange: handleChange,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[12] = handleChange;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== error.description) {
        t9 = error.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "red"
            },
            children: error.description
        }, void 0, false, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 136,
            columnNumber: 31
        }, this);
        $[14] = error.description;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== handleChange) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            name: "amount",
            placeholder: "Belopp(kr)",
            type: "number",
            onChange: handleChange,
            required: true
        }, void 0, false, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[16] = handleChange;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== error.amount) {
        t11 = error.amount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "red"
            },
            children: error.amount
        }, void 0, false, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 154,
            columnNumber: 27
        }, this);
        $[18] = error.amount;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== form) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "categories",
            children: categories.map({
                "AddExpensesModal[categories.map()]": (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: form.category === c.key ? "cat active" : "cat",
                        onClick: {
                            "AddExpensesModal[categories.map() > <button>.onClick]": ()=>setForm({
                                    ...form,
                                    category: c.key
                                })
                        }["AddExpensesModal[categories.map() > <button>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "18px"
                                },
                                children: c.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AddExpenseModal.jsx",
                                lineNumber: 170,
                                columnNumber: 69
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: c.key
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AddExpenseModal.jsx",
                                lineNumber: 172,
                                columnNumber: 29
                            }, this)
                        ]
                    }, c.key, true, {
                        fileName: "[project]/src/app/components/AddExpenseModal.jsx",
                        lineNumber: 165,
                        columnNumber: 52
                    }, this)
            }["AddExpensesModal[categories.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[20] = form;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            children: "Spara"
        }, void 0, false, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== onClose) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "button-container",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onClose,
                    children: "Avbryt"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AddExpenseModal.jsx",
                    lineNumber: 188,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[23] = onClose;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== handleSubmit || $[26] !== t10 || $[27] !== t11 || $[28] !== t12 || $[29] !== t14 || $[30] !== t8 || $[31] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "modal-content",
                noValidate: true,
                children: [
                    t6,
                    t7,
                    t8,
                    t9,
                    t10,
                    t11,
                    t12,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/AddExpenseModal.jsx",
                lineNumber: 196,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/AddExpenseModal.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[25] = handleSubmit;
        $[26] = t10;
        $[27] = t11;
        $[28] = t12;
        $[29] = t14;
        $[30] = t8;
        $[31] = t9;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    return t15;
}
_s(AddExpensesModal, "Q2bIslAD4hDJZwze42ZUqM08yzY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ExpenseContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"]
    ];
});
_c = AddExpensesModal;
var _c;
__turbopack_context__.k.register(_c, "AddExpensesModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/ExpenseGraph.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpenseGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
"use client";
;
;
;
function ExpenseGraph(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "c4426fb3c2912c9131507ff14303b884d21aa4f22da234f1f8edf60db259c826") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c4426fb3c2912c9131507ff14303b884d21aa4f22da234f1f8edf60db259c826";
    }
    const { expenses: t1 } = t0;
    let categoryColors;
    let expenses;
    let monthlyData;
    if ($[1] !== t1) {
        expenses = t1 === undefined ? [] : t1;
        let t2;
        if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = {
                Mat: "#FF8042",
                Hem: "#0088FE",
                Nöje: "#00C49F",
                Transport: "#FFBB28",
                Shopping: "#8884d8",
                Övrigt: "#cccccc"
            };
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        categoryColors = t2;
        const now = new Date();
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        monthlyData = Array.from({
            length: daysInMonth
        }, _ExpenseGraphArrayFrom);
        expenses.forEach({
            "ExpenseGraph[expenses.forEach()]": (exp)=>{
                const expDate = new Date(exp.date);
                if (expDate.getMonth() === now.getMonth() && expDate.getFullYear() === now.getFullYear()) {
                    const dayIndex = expDate.getDate() - 1;
                    const cat = exp.category || "\xD6vrigt";
                    if (dayIndex >= 0 && dayIndex < daysInMonth) {
                        monthlyData[dayIndex][cat] = (monthlyData[dayIndex][cat] || 0) + Number(exp.amount);
                    }
                }
            }
        }["ExpenseGraph[expenses.forEach()]"]);
        $[1] = t1;
        $[2] = categoryColors;
        $[3] = expenses;
        $[4] = monthlyData;
    } else {
        categoryColors = $[2];
        expenses = $[3];
        monthlyData = $[4];
    }
    let t2;
    let t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: "Monthly Expenses"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        t4 = {
            width: "100%",
            height: 300,
            fontSize: ".78em"
        };
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
    }
    const t5 = expenses.length;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "grey",
                paddingLeft: "15px"
            },
            children: "Kr"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            left: -20,
            right: 20,
            top: 20,
            bottom: 5
        };
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            dataKey: "day",
            label: {
                value: "Days",
                position: "insideBottom",
                offset: -5
            }
        }, void 0, false, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t10;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            label: {
                value: "kr",
                angle: 20,
                position: "left",
                offset: 10
            }
        }, void 0, false, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t9;
    } else {
        t10 = $[12];
        t9 = $[13];
    }
    let t11;
    if ($[14] !== categoryColors) {
        t11 = Object.keys(categoryColors);
        $[14] = categoryColors;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== categoryColors || $[17] !== t11) {
        t12 = t11.map({
            "ExpenseGraph[(anonymous)()]": (cat_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    dataKey: cat_0,
                    fill: categoryColors[cat_0],
                    barSize: 15
                }, cat_0, false, {
                    fileName: "[project]/src/app/components/ExpenseGraph.jsx",
                    lineNumber: 142,
                    columnNumber: 47
                }, this)
        }["ExpenseGraph[(anonymous)()]"]);
        $[16] = categoryColors;
        $[17] = t11;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== monthlyData || $[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            data: monthlyData,
            margin: t7,
            children: [
                t8,
                t9,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[19] = monthlyData;
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== expenses.length || $[23] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t4,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                children: [
                    t6,
                    t13
                ]
            }, t5, true, {
                fileName: "[project]/src/app/components/ExpenseGraph.jsx",
                lineNumber: 161,
                columnNumber: 27
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[22] = expenses.length;
        $[23] = t13;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "25px",
            flexWrap: "wrap"
        };
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== categoryColors) {
        t16 = Object.keys(categoryColors);
        $[26] = categoryColors;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== categoryColors || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t15,
            children: t16.map({
                "ExpenseGraph[(anonymous)()]": (cat_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            color: "white"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 12,
                                    height: 12,
                                    backgroundColor: categoryColors[cat_1],
                                    borderRadius: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ExpenseGraph.jsx",
                                lineNumber: 197,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.78em"
                                },
                                children: cat_1
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ExpenseGraph.jsx",
                                lineNumber: 202,
                                columnNumber: 16
                            }, this)
                        ]
                    }, cat_1, true, {
                        fileName: "[project]/src/app/components/ExpenseGraph.jsx",
                        lineNumber: 192,
                        columnNumber: 49
                    }, this)
            }["ExpenseGraph[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[28] = categoryColors;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t14 || $[32] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "chart",
            children: [
                t2,
                t3,
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ExpenseGraph.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t17;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    return t18;
}
_c = ExpenseGraph;
function _ExpenseGraphArrayFrom(_, i) {
    return {
        day: i + 1
    };
}
var _c;
__turbopack_context__.k.register(_c, "ExpenseGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/TransactionList.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransactionList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ExpenseContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ExpenseContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TransactionList() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "3805dfc712cdf971de428a13b1258f519d7d7ebb18e006c4b319f3118b28f547") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3805dfc712cdf971de428a13b1258f519d7d7ebb18e006c4b319f3118b28f547";
    }
    const { expenses, deleteExpense } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ExpenseContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            Mat: {
                icon: "\uD83C\uDF54",
                color: "#FF8042"
            },
            Hem: {
                icon: "\uD83C\uDFE0",
                color: "#0088FE"
            },
            Nöje: {
                icon: "\uD83C\uDFAE",
                color: "#00C49F"
            },
            Transport: {
                icon: "\uD83D\uDE97",
                color: "#FFBB28"
            },
            Shopping: {
                icon: "\uD83D\uDECD\uFE0F",
                color: "#8884d8"
            },
            Övrigt: {
                icon: "\uD83D\uDCE6",
                color: "#cccccc"
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const categoryData = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[2] !== deleteExpense || $[3] !== expenses) {
        const reversedExpenses = [
            ...expenses
        ].reverse();
        t4 = "chart";
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Transactionlist"
            }, void 0, false, {
                fileName: "[project]/src/app/components/TransactionList.jsx",
                lineNumber: 59,
                columnNumber: 12
            }, this);
            $[9] = t5;
        } else {
            t5 = $[9];
        }
        t1 = "transaction-container";
        if ($[10] !== expenses.length) {
            t2 = expenses.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "empty-msg",
                style: {
                    color: "grey",
                    padding: "15px"
                },
                children: "No transactions yet."
            }, void 0, false, {
                fileName: "[project]/src/app/components/TransactionList.jsx",
                lineNumber: 66,
                columnNumber: 37
            }, this);
            $[10] = expenses.length;
            $[11] = t2;
        } else {
            t2 = $[11];
        }
        let t6;
        if ($[12] !== deleteExpense) {
            t6 = ({
                "TransactionList[reversedExpenses.map()]": (item)=>{
                    const config = categoryData[item.category] || categoryData.Övrigt;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "transaction-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "item-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-circle",
                                        style: {
                                            backgroundColor: config.color
                                        },
                                        children: config.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TransactionList.jsx",
                                        lineNumber: 80,
                                        columnNumber: 93
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item-text",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "item-description",
                                                style: {
                                                    color: "white"
                                                },
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/TransactionList.jsx",
                                                lineNumber: 82,
                                                columnNumber: 64
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "item-sub",
                                                style: {
                                                    fontSize: "0.78em",
                                                    color: "white"
                                                },
                                                children: [
                                                    item.category,
                                                    " • ",
                                                    new Date(item.date).toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/TransactionList.jsx",
                                                lineNumber: 84,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/TransactionList.jsx",
                                        lineNumber: 82,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/TransactionList.jsx",
                                lineNumber: 80,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "item-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "item-amount",
                                        style: {
                                            color: "white"
                                        },
                                        children: [
                                            "-",
                                            item.amount.toLocaleString("sv-SE"),
                                            " kr"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/TransactionList.jsx",
                                        lineNumber: 87,
                                        columnNumber: 124
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "delete-btn",
                                        onClick: {
                                            "TransactionList[reversedExpenses.map() > <button>.onClick]": ()=>deleteExpense(item.id)
                                        }["TransactionList[reversedExpenses.map() > <button>.onClick]"],
                                        children: "🗑️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/TransactionList.jsx",
                                        lineNumber: 89,
                                        columnNumber: 63
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/TransactionList.jsx",
                                lineNumber: 87,
                                columnNumber: 96
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/app/components/TransactionList.jsx",
                        lineNumber: 80,
                        columnNumber: 18
                    }, this);
                }
            })["TransactionList[reversedExpenses.map()]"];
            $[12] = deleteExpense;
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        t3 = reversedExpenses.map(t6);
        $[2] = deleteExpense;
        $[3] = expenses;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
    }
    let t6;
    if ($[14] !== t1 || $[15] !== t2 || $[16] !== t3) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/TransactionList.jsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[14] = t1;
        $[15] = t2;
        $[16] = t3;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== t4 || $[19] !== t5 || $[20] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/TransactionList.jsx",
            lineNumber: 126,
            columnNumber: 10
        }, this);
        $[18] = t4;
        $[19] = t5;
        $[20] = t6;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    return t7;
}
_s(TransactionList, "jR9xSJ7c+CE7TjZ8JUf1ndFBS64=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ExpenseContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"]
    ];
});
_c = TransactionList;
var _c;
__turbopack_context__.k.register(_c, "TransactionList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ExpenseContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/ExpenseContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AddExpenseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/AddExpenseModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExpenseGraph$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ExpenseGraph.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TransactionList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/TransactionList.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function App() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "460c1ff76a02edf8e90db5c943b002bd1f2f098766b03b91b82a24dcf293ad78") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "460c1ff76a02edf8e90db5c943b002bd1f2f098766b03b91b82a24dcf293ad78";
    }
    const { expenses } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ExpenseContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] !== expenses) {
        t0 = expenses.reduce(_AppExpensesReduce, 0);
        $[1] = expenses;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const total = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "SpendWise"
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "App[<Card>.onAdd]": ()=>setIsModalOpen(true)
        })["App[<Card>.onAdd]"];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== total) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            label: "Total Expenses",
            value: total,
            onAdd: t2
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = total;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== expenses) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExpenseGraph$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            expenses: expenses
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[7] = expenses;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TransactionList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "main-grid",
            children: [
                " ",
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== isModalOpen) {
        t7 = isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AddExpenseModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onClose: {
                "App[<AddExpensesModal>.onClose]": ()=>setIsModalOpen(false)
            }["App[<AddExpensesModal>.onClose]"]
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 80,
            columnNumber: 25
        }, this);
        $[12] = isModalOpen;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t3 || $[15] !== t6 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "app-wrapper",
            children: [
                " ",
                t1,
                t3,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t6;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_s(App, "sovSSmby34PsHbRc6zwli4o0/uQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$ExpenseContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"]
    ];
});
_c = App;
function _AppExpensesReduce(sum, e) {
    return sum + e.amount;
}
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_5ec9b952._.js.map