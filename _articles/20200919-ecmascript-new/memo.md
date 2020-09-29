## Static Semantics vs Runtime Semantics



## GetValue (V)

```
6.2.4.8 GetValue ( V )
1. ReturnIfAbrupt(V).
2. If Type(V) is not Reference, return V.
3. Let base be GetBase(V). // この時点でVはRefrenceでVのbase value componentが返る
4. If IsUnresolvableReference(V) is true, throw a ReferenceError exception. // Vのbase value componentがundefinedならtrueが返る
5. If IsPropertyReference(V) is true, then // Vのbase value coponentがObjectかプリミティブならtrueが返る
    a. If HasPrimitiveBase(V) is true, then / Vのbase value componentがBoolean, String, Symbol, BigInt, Numberならtrue
        i. Assert: In this case, base will never be undefined or null.
        ii. Set base to ! ToObject(base).
    b.Return ? base.[[Get]](GetReferencedName(V), GetThisValue(V)). // Vのbase componentがObjectの場合しかありえない
6. Else,
    a. Assert: base is an Environment Record.  // Vのbase coponentがEnviroment Recordの場合しかありえない
    b. Return ? base.GetBindingValue(GetReferencedName(V), IsStrictReference(V)) (see 8.1.1).
```

```
6.2.4.1 GetBase ( V )
1. Assert: Type(V) is Reference.
2. Return the base value component of V.
```

```
6.2.4.6 IsUnresolvableReference ( V )
1. Assert: Type(V) is Reference.
2. If the base value component of V is undefined, return true; otherwise return false.
```

* Referenveのbase value componentの型が分からないのでGetValue(V)の分岐先がわからない。
* そもそもfunction Vehicle生成の時点で何をしているかが分からないと先が読めない。

## Create a function

```
14.1.23 Runtime Semantics: InstantiateFunctionObject
With parameter scope.

FunctionDeclaration:function BindingIdentifier ( FormalParameters ) { FunctionBody }
1. Let name be StringValue of BindingIdentifier.
2. Let F be OrdinaryFunctionCreate(%Function.prototype%, FormalParameters, FunctionBody, non-lexical-this, scope).
3. Perform MakeConstructor(F).
4. Perform SetFunctionName(F, name).
5. Set F.[[SourceText]] to the source text matched by FunctionDeclaration.
6. Return F.
```

```
9.2.3 OrdinaryFunctionCreate ( functionPrototype, ParameterList, Body, thisMode, Scope )
The abstract operation OrdinaryFunctionCreate requires the arguments: an object functionPrototype, a parameter list Parse Node specified by ParameterList, a body Parse Node specified by Body, thisMode which is either lexical-this or non-lexical-this, and a Lexical Environment specified by Scope. OrdinaryFunctionCreate performs the following steps:

1. Assert: Type(functionPrototype) is Object.
2. Let internalSlotsList be the internal slots listed in Table 27.
3. Let F be ! OrdinaryObjectCreate(functionPrototype, internalSlotsList).
4. Set F.[[Call]] to the definition specified in 9.2.1.
5. Set F.[[FormalParameters]] to ParameterList.
6. Set F.[[ECMAScriptCode]] to Body.
7. If the source text matching Body is strict mode code, let Strict be true; else let Strict be false.
8. Set F.[[Strict]] to Strict.
9. If thisMode is lexical-this, set F.[[ThisMode]] to lexical.
10. Else if Strict is true, set F.[[ThisMode]] to strict.
11. Else, set F.[[ThisMode]] to global.
12. Set F.[[IsClassConstructor]] to false.
13. Set F.[[Environment]] to Scope.
14. Set F.[[ScriptOrModule]] to GetActiveScriptOrModule().
15. Set F.[[Realm]] to the current Realm Record.
16. Set F.[[HomeObject]] to undefined.
17. Let len be the ExpectedArgumentCount of ParameterList.
18. Perform ! SetFunctionLength(F, len).
19. Return F.
```

```
9.1.12 OrdinaryObjectCreate ( proto [ , additionalInternalSlotsList ] )
The abstract operation OrdinaryObjectCreate with argument proto (an object or null) is used to specify the runtime creation of new ordinary objects. The optional argument additionalInternalSlotsList is a List of the names of additional internal slots that must be defined as part of the object, beyond [[Prototype]] and [[Extensible]]. If the list is not provided, a new empty List is used. This abstract operation performs the following steps:

1. Let internalSlotsList be « [[Prototype]], [[Extensible]] ».
2. If additionalInternalSlotsList is present, append each of its elements to internalSlotsList.
3. Let O be ! MakeBasicObject(internalSlotsList).
4. Set O.[[Prototype]] to proto.
5. Return O.
```
