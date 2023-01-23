export interface RouteType {
  path: string;
  component: React.LazyExoticComponent<React.FC<{}>>;
  children?: route[];
}

type route = {
  path: string;
  component: React.LazyExoticComponent<React.FC<{}>>;
};
