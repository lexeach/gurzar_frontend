import createCrudSlice from "../../core/crud/createCrudSlice";

/*
|--------------------------------------------------------------------------
| Temporary Service
|--------------------------------------------------------------------------
| बाद में इसे API service से replace कर देना:
| src/services/hierarchyService.js
*/

const hierarchyService = {
  async list(level) {
    return {
      data: [
        {
          id: 1,
          code: "HR-001",
          name: "Sample Item 1",
          parent: "-",
          members: 25,
          status: "active",
        },
        {
          id: 2,
          code: "HR-002",
          name: "Sample Item 2",
          parent: "Parent Item",
          members: 12,
          status: "inactive",
        },
      ],

      pagination: {
        page: 1,
        pageSize: 20,
        total: 2,
      },
    };
  },

  async get(id) {
    return {
      data: {
        id,
      },
    };
  },

  async create(data) {
    return {
      data: {
        id: Date.now(),
        ...data,
      },
    };
  },

  async update(data) {
    return {
      data,
    };
  },

  async remove(id) {
    return true;
  },
};

const hierarchyCrud = createCrudSlice({
  name: "hierarchyCrud",
  service: hierarchyService,
});

export const {
  fetchAll: fetchHierarchy,
  fetchOne: fetchHierarchyById,
  createItem: createHierarchy,
  updateItem: updateHierarchy,
  deleteItem: deleteHierarchy,
} = hierarchyCrud.actions;

export default hierarchyCrud.reducer;