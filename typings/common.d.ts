declare namespace CommonType {
  /**
   * 获取数组元素的类型
   */
  type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
    ? ElementType
    : never;
}
