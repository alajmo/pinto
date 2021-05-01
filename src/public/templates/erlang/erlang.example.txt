%% @doc A binary tree implementation in Erlang.
%%      A binary tree stores keys and values.

-module(binary_tree).
-export([init/0, init/1, insert/3, lookup/2]).
-define(EMPTY_NODE, {node, 'empty'}).

%% @doc Initialize an empty binary tree node.
%%      This is how the root of the tree should be established.
%%
%% @spec init() -> tree().
init() ->
  ?EMPTY_NODE.

%% @doc Initialize a binary tree with the given list of Keys and Values.
%%      Each Key-Value pair is given as a Pair in a List.
%%
%% @spec init([pair(), pair(), ...]) -> tree().
init(Pairs) ->
  insert(Pairs, init()).

%% @doc Find an existing value by its Key.
%%      If the Key does not exist, {none, 'undefined'} is returned.
%%
%% @spec lookup(integer(), tree()) -> {ok, term()} | {none, 'undefined'}.
lookup(_K, _Tree = ?EMPTY_NODE) ->
  {none, 'undefined'};
lookup(K, _Tree = {node, {NodeK, V, Left, Right}}) ->
  if K == NodeK -> {ok, V}
   ; K <  NodeK -> lookup(K, Left)
   ; K >  NodeK -> lookup(K, Right)
  end.

%% @doc Insert a new Key into the Tree.
%%      If the Key already exists, it will be replaced.
%%
%% @spec insert(integer(), term(), tree()) -> tree().
insert(K, V, _Tree = ?EMPTY_NODE) ->
  {node, {K, V, init(), init()}};
insert(K, V, _Tree = {node, {NodeK, NodeV, Left, Right}}) ->
  if K == NodeK -> % replace
      {node, {K, V, Left, Right}}
   ; K  < NodeK ->
      {node, {NodeK, NodeV, insert(K, V, Left), Right}}
   ; K  > NodeK ->
      {node, {NodeK, NodeV, Left, insert(K, V, Right)}}
  end.

%% @private
insert([], Tree) -> Tree;
insert([{K, V}|Rest], Tree) ->
  insert(Rest, insert(K, V, Tree)).
