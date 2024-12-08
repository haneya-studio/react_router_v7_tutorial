import { 
  type RouteConfig, 
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hoge", "routes/hoge.tsx"),
  route("/fuga", "routes/fuga.tsx"),
  route("/todos", "routes/todos.tsx"),
] satisfies RouteConfig;
